import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { TrendingUp, Check } from "lucide-react";

export default function PerformanceMarketing() {
  const features = [
    "Advanced audience segmentation for precise targeting",
    "Real-time campaign optimization for maximum ROI",
    "Predictive modeling to forecast campaign performance",
    "Data-driven insights and actionable recommendations",
    "Multi-channel advertising (Google, Meta, TikTok, LinkedIn)",
    "Conversion rate optimization (CRO) strategies",
    "A/B testing and experimentation frameworks",
    "Comprehensive analytics and reporting dashboards",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            Precision Performance<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Data-driven marketing that delivers measurable results. We optimize every dollar spent to maximize your return on ad spend.
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
                className="flex items-start gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover-elevate transition-all"
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

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Scale Your Marketing ROI"
            description="Let's create a performance marketing strategy that drives real business growth."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
