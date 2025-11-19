import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSlider from "@/components/ServiceSlider";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UGCShowcaseSection from "@/components/UGCShowcaseSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Service Slider Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
          </motion.div>

          <ServiceSlider />
        </div>
      </section>

      <SuccessStoriesSection />
      <StatsSection />
      <TestimonialsSection />
      <UGCShowcaseSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
