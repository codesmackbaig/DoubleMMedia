import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Camera, Check } from "lucide-react";

export default function AIPhotography() {
  const features = [
    "Interactive visual elements that engage customers",
    "Automated editing for consistent product imagery",
    "Photorealistic 3D models of your products",
    "360-degree product views for immersive shopping",
    "Augmented Reality (AR) integration for try-before-you-buy",
    "Batch image optimization for web performance",
    "AI-powered background removal and enhancement",
    "Product visualization in real-world contexts",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-6">
            <Camera className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            AI Product Photography<br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">& 3D Modeling</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcase your products like never before. AI-powered photography and 3D modeling that drives conversions and enhances the shopping experience.
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
                className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20 hover-elevate transition-all"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent" />
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
            title="Transform Your Product Imagery"
            description="Let's create stunning visuals that make your products stand out."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
