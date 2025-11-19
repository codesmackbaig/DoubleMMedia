import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Code, Check } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    "Custom website development tailored to your brand",
    "Responsive mobile-first design for all devices",
    "SEO-optimized structure for better search rankings",
    "E-commerce site development with secure payment integration",
    "Ongoing maintenance and updates",
    "Secure hosting with SSL certificates",
    "Content management systems (CMS) integration",
    "Performance optimization for fast loading times",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
            <Code className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            Web <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Custom websites that drive results. From concept to deployment, we build powerful web solutions optimized for performance and growth.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover-elevate transition-all"
                data-testid={`feature-${feature.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Ready to Build Your Website?"
            description="Let's discuss your web development needs and create a custom solution for your business."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
