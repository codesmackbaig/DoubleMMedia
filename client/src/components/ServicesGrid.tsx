import { Code, Palette, Camera, TrendingUp, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      href: "/web-development",
      description: "Custom websites, responsive design, SEO-optimized structure, e-commerce development, and secure hosting.",
      features: ["Custom Websites", "Responsive Mobile Design", "SEO-Optimized", "E-Commerce Development", "Secure Hosting"],
    },
    {
      icon: Palette,
      title: "Web Design",
      href: "/web-design",
      description: "User-centered design, intuitive flows, seamless journeys, comprehensive user research and accessibility.",
      features: ["User-Centered Design", "Intuitive Flows", "User Research & Testing", "Accessibility Focused"],
    },
    {
      icon: Camera,
      title: "AI Product Photography & 3D Modeling",
      href: "/ai-photography",
      description: "Interactive visuals, automated editing, photorealistic 3D models, 360° views, AR integration.",
      features: ["Photorealistic 3D Models", "360° Product Views", "AR Integration", "Batch Optimization"],
    },
    {
      icon: TrendingUp,
      title: "Precision Performance Marketing",
      href: "/performance-marketing",
      description: "Advanced audience segmentation, real-time optimization, predictive modeling and data insights.",
      features: ["Audience Segmentation", "Real-Time Optimization", "Predictive Modeling", "Data Insights"],
    },
    {
      icon: ShoppingBag,
      title: "SmartCommerce Management",
      href: "/smartcommerce",
      description: "E-commerce setup & optimization, customer support, AI recommendations, smart analytics.",
      features: ["Store Setup", "AI Recommendations", "Customer Support", "Smart Analytics"],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="p-8 h-full hover-elevate active-elevate-2 cursor-pointer transition-all border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
          >
            <Link href="/contact">
            <Card className="p-8 h-full cursor-pointer transition-all bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 hover:border-primary/60 flex flex-col items-center justify-center text-center group">
              <Sparkles className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your project and create something amazing together
              </p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Contact Us Now
                <ArrowRight className="h-5 w-5" />
              </span>
            </Card>
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
