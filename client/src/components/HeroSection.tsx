import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { SiShopify, SiAmazon, SiWoo, SiWordpress, SiMeta, SiGoogle } from "react-icons/si";
import Interactive3DBackground from "./Interactive3DBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      {/* Interactive 3D Background */}
      <Interactive3DBackground />
      
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        {/* Centralized Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">10+ Years of Digital Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display"
            data-testid="hero-headline"
          >
            Bring Your Brand
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              To Life Online
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            data-testid="hero-description"
          >
            We're a digital marketing and creative agency with a team of expert developers,
            designers, and marketers ready to transform your retail business into an online powerhouse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)]"
                data-testid="button-hero-contact"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 border-primary/50 hover:border-primary transition-all backdrop-blur-sm"
                data-testid="button-hero-portfolio"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Platform Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xs font-medium text-muted-foreground mb-6">
              TRUSTED PLATFORMS WE WORK WITH
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center max-w-2xl mx-auto">
              {[
                { icon: SiShopify, name: "Shopify", color: "#96bf48" },
                { icon: SiAmazon, name: "Amazon", color: "#FF9900" },
                { icon: SiWoo, name: "WooCommerce", color: "#96588a" },
                { icon: SiWordpress, name: "WordPress", color: "#21759b" },
                { icon: SiMeta, name: "Meta", color: "#0081fb" },
                { icon: SiGoogle, name: "Google", color: "#4285f4" },
              ].map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="group cursor-pointer"
                  data-testid={`platform-${platform.name.toLowerCase()}`}
                >
                  <platform.icon
                    className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      filter: "grayscale(100%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.color = platform.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
