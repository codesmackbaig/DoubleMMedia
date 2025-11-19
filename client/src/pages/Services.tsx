import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServiceSlider, { services } from "@/components/ServiceSlider";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero with Service Slider */}
      <section className="relative pt-24 pb-12 md:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display" data-testid="text-services-heading">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and drive measurable growth across all channels.
            </p>
          </motion.div>

          <ServiceSlider />
        </div>
      </section>

      {/* Detailed Service Breakdown */}
      <section className="py-20 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Double M Media?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine 10+ years of experience with cutting-edge technology to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "Over a decade of successful projects across industries, from startups to enterprise clients.",
              },
              {
                title: "Full-Service Agency",
                description: "Everything you need under one roof - from design and development to marketing and management.",
              },
              {
                title: "Data-Driven Approach",
                description: "Every decision backed by analytics and insights to maximize your ROI and business impact.",
              },
              {
                title: "AI-Powered Solutions",
                description: "Leverage cutting-edge AI technology for photography, content, and intelligent automation.",
              },
              {
                title: "Transparent Communication",
                description: "Clear reporting, regular updates, and direct access to your dedicated team members.",
              },
              {
                title: "Scalable Solutions",
                description: "Solutions that grow with your business, from MVP to enterprise-scale operations.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover-elevate"
                data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Each Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Click any service to learn more about what we offer and how we can help your business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm hover-elevate overflow-hidden"
                data-testid={`service-detail-${service.id}`}
              >
                {/* Background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: service.backgroundImage }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      border: `2px solid ${service.color}60`
                    }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: service.color }} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 font-display">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <Link href={service.href}>
                    <Button 
                      variant="outline"
                      className="group-hover:bg-primary/10 group-hover:border-primary/40"
                      data-testid={`button-view-${service.id}`}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection 
        title="Ready to Transform Your Digital Presence?"
        description="Let's discuss how our services can help you achieve your business goals"
        subtitle="Get in touch for a free consultation"
      />

      <Footer />
    </div>
  );
}
