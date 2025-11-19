import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Users, Target, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import officeImage from "@assets/stock_images/office_team_collabor_f7def39a.jpg";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We partner with you every step of the way.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of digital trends to keep your brand competitive.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in every project we deliver.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Double M Media</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Bringing brands to life online for over 10 years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For over a decade, Double M Media has been at the forefront of digital transformation,
                  helping businesses transition from traditional retail to thriving online enterprises.
                </p>
                <p>
                  We started with a simple mission: use graphic design and web development to bring
                  brands to life in the digital space. Today, we're a full-service digital marketing
                  and creative agency with a passionate team of developers, designers, and marketers.
                </p>
                <p>
                  Our expertise spans web development, design, AI-powered product photography, performance
                  marketing, and e-commerce management. We combine technical excellence with creative
                  innovation to deliver solutions that drive real business results.
                </p>
                <p>
                  Whether you're launching your first online store or scaling an established brand,
                  we have the experience and expertise to help you succeed in the digital age.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={officeImage}
                alt="Double M Media Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-8 text-center hover-elevate active-elevate-2 transition-all border-primary/20 bg-card/50 backdrop-blur-sm"
                >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg text-muted-foreground">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-lg text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="Let's Work Together"
        description="Ready to transform your brand with a team that cares?"
        subtitle="Get in touch with Double M Media today"
      />

      <Footer />
    </div>
  );
}
