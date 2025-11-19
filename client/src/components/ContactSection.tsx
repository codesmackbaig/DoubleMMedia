import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

interface ContactSectionProps {
  title?: string;
  description?: string;
  subtitle?: string;
}

export default function ContactSection({ 
  title = "Ready to Transform Your Brand?",
  description = "Let's discuss how we can help you achieve your business goals",
  subtitle = "Get in touch with our team today"
}: ContactSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
            {description}
          </p>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <ContactForm 
            title="Let's Work Together"
            description="Tell us about your project in your own words"
          />
        </motion.div>
      </div>
    </section>
  );
}
