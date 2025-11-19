import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ContactFormProps {
  title?: string;
  description?: string;
}

export default function ContactForm({ 
  title = "Let's Work Together", 
  description = "Tell us about your project in your own words" 
}: ContactFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: `Service Interested: ${formData.service}\n\n${formData.message}`,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent! 🎉",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          company: "", 
          service: "",
          message: "" 
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly at meesam@doublemmedia.co",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 md:p-10 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground mb-8">{description}</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Line 1: Hi! My name is ___ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 text-lg"
          >
            <span className="text-foreground font-medium">Hi! My name is</span>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="your name"
              required
              className="inline-flex w-auto min-w-[200px] border-0 border-b-2 border-primary/30 rounded-none bg-transparent focus:border-primary focus-visible:ring-0 px-2 text-lg font-medium placeholder:text-muted-foreground/50"
              data-testid="input-name"
            />
            <span className="text-foreground">and I represent</span>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="company/business"
              className="inline-flex w-auto min-w-[200px] border-0 border-b-2 border-primary/30 rounded-none bg-transparent focus:border-primary focus-visible:ring-0 px-2 text-lg font-medium placeholder:text-muted-foreground/50"
              data-testid="input-company"
            />
          </motion.div>

          {/* Line 2: I'm looking for ___ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 text-lg"
          >
            <span className="text-foreground font-medium">I'm looking for</span>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger 
                className="inline-flex w-auto min-w-[250px] border-0 border-b-2 border-primary/30 rounded-none bg-transparent focus:border-primary focus:ring-0 px-2 text-lg font-medium data-[placeholder]:text-muted-foreground/50"
                data-testid="select-service"
              >
                <SelectValue placeholder="select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="web-design">Web Design</SelectItem>
                <SelectItem value="ai-photography">AI Photography & 3D Modeling</SelectItem>
                <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                <SelectItem value="smartcommerce">SmartCommerce Management</SelectItem>
                <SelectItem value="full-package">Full Package (All Services)</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-foreground">to help my business.</span>
          </motion.div>

          {/* Line 3: You can reach me at ___ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 text-lg"
          >
            <span className="text-foreground font-medium">You can reach me at</span>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@example.com"
              required
              className="inline-flex w-auto min-w-[200px] border-0 border-b-2 border-primary/30 rounded-none bg-transparent focus:border-primary focus-visible:ring-0 px-2 text-lg font-medium placeholder:text-muted-foreground/50"
              data-testid="input-email"
            />
            <span className="text-foreground">or</span>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="phone number"
              className="inline-flex w-auto min-w-[180px] border-0 border-b-2 border-primary/30 rounded-none bg-transparent focus:border-primary focus-visible:ring-0 px-2 text-lg font-medium placeholder:text-muted-foreground/50"
              data-testid="input-phone"
            />
          </motion.div>

          {/* Line 4: Here's what I want to achieve */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <div className="text-lg">
              <span className="text-foreground font-medium">Here's what I want to achieve:</span>
            </div>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your goals, challenges, and what success looks like for you..."
              rows={6}
              required
              className="border-primary/20 focus:border-primary resize-none text-base bg-background/50 placeholder:text-muted-foreground/50"
              data-testid="input-message"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] text-lg py-6"
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? "Sending..." : "Send Message ✨"}
            </Button>
          </motion.div>
        </form>
      </div>
    </Card>
  );
}
