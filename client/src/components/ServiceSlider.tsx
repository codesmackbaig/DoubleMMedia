import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ChevronRight, Code, Palette, Camera, TrendingUp, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: typeof Code;
  href: string;
  backgroundImage: string;
  color: string;
}

const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDescription: "Custom websites that drive results. From concept to deployment, we build powerful web solutions optimized for performance and growth.",
    icon: Code,
    href: "/web-development",
    backgroundImage: "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 150, 200, 0.05) 100%)",
    color: "rgba(0, 217, 255, 0.8)",
  },
  {
    id: "web-design",
    title: "Web Design",
    shortDescription: "Beautiful, intuitive designs that captivate your audience. We craft user experiences that convert visitors into customers.",
    icon: Palette,
    href: "/web-design",
    backgroundImage: "linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, rgba(200, 0, 100, 0.05) 100%)",
    color: "rgba(255, 0, 128, 0.8)",
  },
  {
    id: "ai-photo",
    title: "AI Product Photography",
    shortDescription: "Transform your product visuals with AI-powered photography and 3D modeling. Create stunning, photorealistic images at scale.",
    icon: Camera,
    href: "/ai-photography",
    backgroundImage: "linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 200, 100, 0.05) 100%)",
    color: "rgba(0, 255, 136, 0.8)",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    shortDescription: "Data-driven campaigns that maximize ROI. We optimize every touchpoint to turn your advertising spend into measurable growth.",
    icon: TrendingUp,
    href: "/performance-marketing",
    backgroundImage: "linear-gradient(135deg, rgba(255, 200, 0, 0.1) 0%, rgba(200, 150, 0, 0.05) 100%)",
    color: "rgba(255, 200, 0, 0.8)",
  },
  {
    id: "smartcommerce",
    title: "SmartCommerce Management",
    shortDescription: "End-to-end e-commerce solutions powered by intelligent automation. From setup to scaling, we manage your online store for success.",
    icon: ShoppingCart,
    href: "/smartcommerce",
    backgroundImage: "linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(100, 30, 180, 0.05) 100%)",
    color: "rgba(138, 43, 226, 0.8)",
  },
];

export default function ServiceSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance slides - restarts on every activeIndex change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const activeService = services[activeIndex];
  const progress = ((activeIndex + 1) / services.length) * 100;

  return (
    <div className="relative w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Main Slide Area */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16"
              style={{ background: activeService.backgroundImage }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                  color: activeService.color,
                }} />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${activeService.color}40, ${activeService.color}20)`,
                    border: `2px solid ${activeService.color}60`
                  }}
                >
                  <activeService.icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: activeService.color }} />
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-display leading-tight"
                  data-testid={`slider-title-${activeService.id}`}
                >
                  {activeService.title}
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed"
                  data-testid={`slider-description-${activeService.id}`}
                >
                  {activeService.shortDescription}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href={activeService.href}>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg"
                      data-testid={`button-learn-more-${activeService.id}`}
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Slide Number Indicator */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                <span className="text-2xl font-bold text-primary">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-lg text-muted-foreground">{String(services.length).padStart(2, '0')}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Preview Cards Sidebar */}
        <div className="lg:w-80 xl:w-96 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            
            return (
              <motion.button
                key={service.id}
                onClick={() => handleSlideChange(index)}
                className={`
                  flex-shrink-0 w-72 lg:w-full p-4 md:p-5 rounded-xl border-2 transition-all
                  ${isActive 
                    ? 'border-primary bg-card/80 backdrop-blur-sm shadow-lg' 
                    : 'border-border bg-card/40 hover-elevate active-elevate-2'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`preview-card-${service.id}`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`
                      flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                      ${isActive ? 'opacity-100' : 'opacity-70'}
                    `}
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      border: `2px solid ${service.color}60`
                    }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: service.color }} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className={`font-semibold mb-1 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-r-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { services };
