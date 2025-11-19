import { ShoppingCart, Lightbulb, TrendingUp, Video, BarChart3, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Custom Shopify, WooCommerce, and headless commerce solutions built for conversion.",
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Compelling brand identities that resonate with your target audience and drive loyalty.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven paid advertising campaigns across Google, Meta, and TikTok.",
    },
    {
      icon: Video,
      title: "Content Production",
      description: "High-quality video, photography, and copywriting that converts browsers into buyers.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Deep-dive analytics and CRO strategies to maximize your revenue per visitor.",
    },
    {
      icon: Zap,
      title: "Growth Consulting",
      description: "Strategic roadmaps and execution plans to scale your e-commerce business.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              Services That Drive Results
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We combine creative excellence with technical expertise to deliver
              comprehensive e-commerce solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
