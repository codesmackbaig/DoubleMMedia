import { SiLinkedin, SiX, SiInstagram, SiFacebook } from "react-icons/si";
import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: SiLinkedin, href: "#", label: "LinkedIn", testId: "link-linkedin" },
    { icon: SiX, href: "#", label: "Twitter", testId: "link-twitter" },
    { icon: SiInstagram, href: "#", label: "Instagram", testId: "link-instagram" },
    { icon: SiFacebook, href: "#", label: "Facebook", testId: "link-facebook" },
  ];

  const services = [
    { name: "Web Development", href: "/web-development" },
    { name: "Web Design", href: "/web-design" },
    { name: "AI Photography & 3D", href: "/ai-photography" },
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "SmartCommerce", href: "/smartcommerce" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "UGC Campaign", href: "/ugc-campaign" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t border-primary/10 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 border-b border-primary/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Newsletter</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Get the latest insights on digital marketing, design trends, and exclusive case studies
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-primary/20 focus:border-primary bg-background/50"
                required
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-secondary whitespace-nowrap"
                data-testid="button-newsletter-submit"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/">
                  <div className="text-3xl font-display font-bold mb-4 cursor-pointer inline-block group">
                    <span className="text-foreground group-hover:text-primary transition-colors">Double M </span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Media</span>
                  </div>
                </Link>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transforming brands through innovative digital experiences. 
                  Expert development, design, and marketing solutions.
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover-elevate active-elevate-2 transition-all group"
                      data-testid={social.testId}
                    >
                      <social.icon className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-bold mb-6 text-lg">Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href}>
                        <span 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group"
                          data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                        >
                          <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-bold mb-6 text-lg">Company</h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <span 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group"
                          data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-bold mb-6 text-lg">Get In Touch</h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="mailto:meesam@doublemmedia.co"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      data-testid="link-footer-email"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">meesam@doublemmedia.co</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+971556795277"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      data-testid="link-footer-phone"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">+971 55 679 5277</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">
                      2600 Amantea Way<br />
                      Dublin, CA 94568<br />
                      United States
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Double M Media.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="link-cookies"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
