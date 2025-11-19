import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "Double M Media transformed our e-commerce site and the results speak for themselves. Our conversion rate tripled within the first month. Their team is professional, creative, and truly understands digital marketing.",
      author: "Sarah Chen",
      position: "CEO",
      company: "Luxury Fashion Co.",
      verified: true,
    },
    {
      rating: 5,
      text: "Working with Double M Media was a game-changer for our startup. They designed a beautiful dashboard that our users love, and our engagement metrics have skyrocketed. Best investment we've made!",
      author: "Michael Rodriguez",
      position: "Founder",
      company: "TechVision SaaS",
      verified: true,
    },
    {
      rating: 5,
      text: "The influencer campaign they ran for our brand launch exceeded all expectations. 15 million impressions and we sold out in 48 hours. Their UGC content strategy is unmatched!",
      author: "Emma Thompson",
      position: "Marketing Director",
      company: "Pure Beauty Organics",
      verified: true,
    },
    {
      rating: 5,
      text: "450% ROI on our first campaign with them. The team is data-driven, creative, and incredibly responsive. They treat your business like their own. Highly recommend!",
      author: "David Park",
      position: "Head of Growth",
      company: "FitLife App",
      verified: true,
    },
    {
      rating: 5,
      text: "Finally found an agency that delivers what they promise. The AI-powered photography service saved us thousands while delivering stunning product images. A must-have for any e-commerce brand.",
      author: "Jessica Williams",
      position: "Brand Manager",
      company: "Modern Home Goods",
      verified: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            What Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading brands. Verified reviews from real clients.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl relative"
          >
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < testimonials[currentIndex].rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted"
                  }`}
                  data-testid={`star-${i + 1}`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-foreground">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-bold text-lg mb-1">{testimonials[currentIndex].author}</div>
              <div className="text-muted-foreground mb-1">
                {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
              </div>
              {testimonials[currentIndex].verified && (
                <div className="inline-flex items-center gap-1 text-sm text-primary">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Trustpilot Review
                </div>
              )}
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted hover-elevate"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
