import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm
                title="Let's Work Together"
                description="Tell us about your project in your own words"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <a href="mailto:meesam@doublemmedia.co" className="text-muted-foreground hover:text-primary transition-colors">
                        meesam@doublemmedia.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Phone</div>
                      <a href="tel:+971556795277" className="text-muted-foreground hover:text-primary transition-colors">
                        +971 55 679 5277
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Address</div>
                      <div className="text-muted-foreground">
                        2600 Amantea Way<br />
                        Dublin, CA 94568<br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Business Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM GST<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h4 className="text-xl font-bold mb-3">Prefer to chat?</h4>
                <p className="text-muted-foreground mb-4">
                  Our AI assistant is available 24/7 to answer your questions and help you get started.
                </p>
                <p className="text-sm text-primary font-medium">
                  Click the chat widget in the bottom left corner ←
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
