import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Palette, Check } from "lucide-react";

export default function WebDesign() {
  const features = [
    "User-centered design focused on your audience needs",
    "Intuitive user flows that guide visitors naturally",
    "Seamless user journeys from discovery to conversion",
    "Comprehensive user research and testing",
    "Accessibility-focused design (WCAG compliant)",
    "Brand identity development and guidelines",
    "Wireframing and prototyping",
    "Responsive design systems for consistency",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-background pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
            <Palette className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            Web <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Design</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beautiful, functional designs that put users first. We create intuitive digital experiences that engage and convert.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20 hover-elevate transition-all"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Let's Design Something Amazing"
            description="Share your vision and we'll create a design that brings it to life."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
