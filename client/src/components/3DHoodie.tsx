import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";
import { Shirt } from "lucide-react";
import mkLogoUrl from "@assets/generated_images/MK_chest_logo_white_c990d5c8.png";
import creativeGraphicUrl from "@assets/generated_images/Creative_vertical_back_graphic_ff0cca15.png";
import sleeveMarkingsUrl from "@assets/generated_images/Sleeve_stripe_markings_a265d4f3.png";

interface Hoodie3DProps {
  className?: string;
  ambientIntensity?: number;
  directionalIntensity?: number;
  lightColor?: string;
  lightPosition?: [number, number, number];
}

export default function Hoodie3D({
  className = "",
  ambientIntensity = 0.6,
  directionalIntensity = 1.2,
  lightColor = "#ffffff",
  lightPosition = [5, 5, 5],
}: Hoodie3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState<boolean | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      setIsWebGLSupported(!!gl);
    } catch (e) {
      setIsWebGLSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isWebGLSupported) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer with solid black background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 1); // Solid black background
    mountRef.current.appendChild(renderer.domElement);

    // Studio Lighting Setup
    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Key light (main directional light)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(4, 6, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.left = -10;
    keyLight.shadow.camera.right = 10;
    keyLight.shadow.camera.top = 10;
    keyLight.shadow.camera.bottom = -10;
    scene.add(keyLight);

    // Fill light (softer, opposite side)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 3, 3);
    scene.add(fillLight);

    // Rim light (subtle back lighting)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(-2, 6, -4);
    scene.add(rimLight);

    // Load textures for graphics with proper encoding
    const textureLoader = new THREE.TextureLoader();
    const mkTexture = textureLoader.load(mkLogoUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });
    const creativeTexture = textureLoader.load(creativeGraphicUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });
    const sleeveTexture = textureLoader.load(sleeveMarkingsUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });

    // Load 3D hoodie/shirt model
    let model: THREE.Group | null = null;
    let targetMesh: THREE.Mesh | null = null;
    const meshes: THREE.Mesh[] = [];
    const loader = new GLTFLoader();
    
    // Color-shifting: dark grey to light grey
    const darkColor = new THREE.Color(0x1a1a1a); // Almost black
    const lightColor = new THREE.Color(0xe0e0e0); // Light grey/white
    
    // Helper to create decal using DecalGeometry
    const createDecal = (
      mesh: THREE.Mesh,
      texture: THREE.Texture,
      position: THREE.Vector3,
      orientation: THREE.Euler,
      size: THREE.Vector3
    ) => {
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
      });
      
      const decalGeometry = new DecalGeometry(mesh, position, orientation, size);
      return new THREE.Mesh(decalGeometry, material);
    };
    
    loader.load(
      '/models/shirt.glb',
      (gltf) => {
        model = gltf.scene;
        
        // Configure the model
        model.scale.set(3, 3, 3);
        model.position.set(0, -1, 0);
        
        // Enable shadows and cache meshes for color animation
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            meshes.push(child as THREE.Mesh);
            
            // Store the main shirt mesh for decal projection
            if (!targetMesh && child.name.toLowerCase().includes('shirt')) {
              targetMesh = child as THREE.Mesh;
            }
            
            // Diagnostic logging
            const mesh = child as THREE.Mesh;
            console.log('Mesh found:', child.name || 'unnamed', {
              hasUV: !!(mesh.geometry as THREE.BufferGeometry).attributes.uv,
              material: (mesh.material as THREE.Material)?.type
            });
            
            // Ensure material supports color animation
            if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).color) {
              // Start with dark color
              (mesh.material as THREE.MeshStandardMaterial).color.copy(darkColor);
            }
          }
        });
        
        // Add decals using DecalGeometry if we have a target mesh
        if (targetMesh) {
          // Update world matrix before creating decals
          model.updateMatrixWorld(true);
          
          // Get inverse of model's world matrix to convert decals to local space
          const inverseModelMatrix = model.matrixWorld.clone().invert();
          
          // MK Logo on chest (front, center-top)
          const mkDecal = createDecal(
            targetMesh,
            mkTexture,
            new THREE.Vector3(0, 0.3, 0.6),
            new THREE.Euler(0, 0, 0),
            new THREE.Vector3(0.4, 0.4, 0.4)
          );
          mkDecal.applyMatrix4(inverseModelMatrix); // Convert to local space
          model.add(mkDecal); // Parent to model so it rotates with it
          
          // CREATIVE CREATIVE graphic on back (vertical)
          const creativeDecal = createDecal(
            targetMesh,
            creativeTexture,
            new THREE.Vector3(0, 0, -0.6),
            new THREE.Euler(0, Math.PI, 0),
            new THREE.Vector3(0.6, 0.8, 0.6)
          );
          creativeDecal.applyMatrix4(inverseModelMatrix); // Convert to local space
          model.add(creativeDecal); // Parent to model
          
          // Sleeve markings on right sleeve
          const sleeveDecal = createDecal(
            targetMesh,
            sleeveTexture,
            new THREE.Vector3(0.5, 0.1, 0.2),
            new THREE.Euler(0, Math.PI / 2, 0),
            new THREE.Vector3(0.3, 0.15, 0.3)
          );
          sleeveDecal.applyMatrix4(inverseModelMatrix); // Convert to local space
          model.add(sleeveDecal); // Parent to model
        }
        
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );

    // Mouse/touch interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      // Limit vertical rotation
      targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      interactionTimeoutRef.current = window.setTimeout(() => {
        setIsInteracting(false);
      }, 1000);
    };

    // Zoom with mouse wheel
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(3, Math.min(8, camera.position.z));
    };

    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("mouseup", handleMouseUp);
    renderer.domElement.addEventListener("mouseleave", handleMouseUp);
    renderer.domElement.addEventListener("touchstart", handleMouseDown as any);
    renderer.domElement.addEventListener("touchmove", handleMouseMove as any);
    renderer.domElement.addEventListener("touchend", handleMouseUp);
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });

    // Animation
    let windTime = 0;
    let wasInteracting = false;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      windTime += 0.01;

      // Auto-rotation when not interacting
      const isCurrentlyInteracting = isDragging || isInteracting;
      
      if (!isCurrentlyInteracting) {
        // When user stops interacting, continue from current position
        if (wasInteracting) {
          // Just stopped interacting - continue from current rotation
          wasInteracting = false;
        }
        // Continue auto-rotation from wherever we are now
        targetRotationY += 0.005;
      } else {
        wasInteracting = true;
      }

      // Smooth rotation lerp
      currentRotationY += (targetRotationY - currentRotationY) * 0.1;
      currentRotationX += (targetRotationX - currentRotationX) * 0.1;

      if (model) {
        model.rotation.y = currentRotationY;
        model.rotation.x = currentRotationX;

        // Color-shifting animation based on rotation
        // Normalize rotation to 0-1 using sine wave for smooth dark→light→dark cycle
        const TAU = Math.PI * 2;
        const normalizedRotation = (currentRotationY % TAU + TAU) % TAU; // Ensure positive value
        const colorFactor = (Math.sin(normalizedRotation) + 1) * 0.5; // Maps to 0-1
        
        // Update mesh colors: lerp between dark and light
        meshes.forEach((mesh) => {
          const material = mesh.material as THREE.MeshStandardMaterial;
          if (material && material.color) {
            material.color.lerpColors(darkColor, lightColor, colorFactor);
          }
        });

        // Wind animation - subtle bobbing and breathing
        const baseY = -1; // Original y position
        model.position.y = baseY + Math.sin(windTime * 0.8) * 0.05;
        const breathe = 1 + Math.sin(windTime * 0.6) * 0.02;
        model.scale.set(3 * breathe, 3 * breathe, 3 * breathe);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("mouseup", handleMouseUp);
      renderer.domElement.removeEventListener("mouseleave", handleMouseUp);
      renderer.domElement.removeEventListener("touchstart", handleMouseDown as any);
      renderer.domElement.removeEventListener("touchmove", handleMouseMove as any);
      renderer.domElement.removeEventListener("touchend", handleMouseUp);
      renderer.domElement.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrameId);
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up loaded model
      if (model) {
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry?.dispose();
            const material = mesh.material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else if (material) {
              material.dispose();
            }
          }
        });
        scene.remove(model);
      }
      
      renderer.dispose();

      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [isWebGLSupported, ambientIntensity, directionalIntensity, lightColor, lightPosition]);

  // Loading state
  if (isWebGLSupported === null) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg ${className}`}
        data-testid="hoodie-loading"
      >
        <div className="text-center p-8">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  // Fallback for non-WebGL browsers
  if (!isWebGLSupported) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg ${className}`}
        data-testid="webgl-fallback"
      >
        <div className="text-center p-8">
          <div className="w-64 h-64 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <Shirt className="w-32 h-32 text-primary/60" />
          </div>
          <p className="text-muted-foreground">
            3D preview not available on this device
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} data-testid="hoodie-3d-canvas">
      <div
        ref={mountRef}
        className="w-full h-full"
        style={{ cursor: isInteracting ? "grabbing" : "grab" }}
      />

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-white/80 pointer-events-none">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}

// Note: To use a real hoodie GLTF model:
// 1. Install GLTFLoader: npm install three-stdlib
// 2. Place your hoodie.glb file in the public folder
// 3. Import and use GLTFLoader:
//
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//
// const loader = new GLTFLoader();
// loader.load('/hoodie.glb', (gltf) => {
//   const model = gltf.scene;
//   model.scale.set(2, 2, 2);
//   scene.add(model);
//   // Replace mesh variable with model for animations
// });
