import { useState, useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ContactSection from "@/components/ContactSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Users, 
  ShoppingCart, 
  BarChart3,
  Award,
  Quote,
  ArrowRight
} from "lucide-react";
import luxuryFashionImage from "@assets/stock_images/luxury_fashion_ecomm_538516a0.jpg";
import dashboardImage from "@assets/stock_images/business_analytics_d_2fe9c2b3.jpg";
import beautyBrandImage from "@assets/stock_images/natural_organic_beau_61ee5ab7.jpg";
import fitnessAppImage from "@assets/stock_images/fitness_workout_app__a9a8ebed.jpg";
import homeDecorImage from "@assets/stock_images/home_decor_interior__553698df.jpg";
import restaurantImage from "@assets/stock_images/restaurant_booking_r_d61fcbf0.jpg";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "E-commerce", "UI/UX Design", "Branding", "Marketing"];

  const caseStudies = [
    {
      id: 1,
      title: "Luxury Fashion Store Transformation",
      client: "Elegance & Co.",
      category: "E-commerce",
      image: luxuryFashionImage,
      challenge: "Low conversion rates and high cart abandonment on their existing Shopify store",
      solution: "Complete UX redesign with AI-powered product recommendations and streamlined checkout",
      metrics: [
        { label: "Conversion Rate", before: "1.2%", after: "3.84%", increase: "+220%" },
        { label: "Cart Abandonment", before: "78%", after: "42%", increase: "-46%" },
        { label: "Average Order Value", before: "$89", after: "$156", increase: "+75%" },
        { label: "Page Load Time", before: "4.2s", after: "1.1s", increase: "-74%" },
      ],
      testimonial: "Double M Media transformed our online presence completely. Sales have tripled in just 6 months!",
      testimonialAuthor: "Sarah Chen, CEO",
      tags: ["Shopify", "UI/UX", "Performance", "A/B Testing"],
      duration: "3 months",
      caseStudySlug: "luxury-fashion-ecommerce",
    },
    {
      id: 2,
      title: "Tech Startup Dashboard Redesign",
      client: "DataViz Pro",
      category: "UI/UX Design",
      image: dashboardImage,
      challenge: "Complex data visualization platform was confusing users and causing high churn",
      solution: "User-centered redesign with intuitive navigation, real-time collaboration features, and customizable dashboards",
      metrics: [
        { label: "User Retention", before: "45%", after: "82%", increase: "+82%" },
        { label: "Feature Adoption", before: "23%", after: "67%", increase: "+191%" },
        { label: "Support Tickets", before: "340/mo", after: "89/mo", increase: "-74%" },
        { label: "NPS Score", before: "32", after: "78", increase: "+144%" },
      ],
      testimonial: "The new design made our complex platform accessible to everyone. User engagement has skyrocketed!",
      testimonialAuthor: "Michael Torres, Product Lead",
      tags: ["React", "Design System", "Analytics", "UX Research"],
      duration: "4 months",
      caseStudySlug: "tech-startup-dashboard",
    },
    {
      id: 3,
      title: "Organic Beauty Brand Launch",
      client: "Pure Glow Cosmetics",
      category: "Branding",
      image: beautyBrandImage,
      challenge: "New brand needed strong identity to compete in saturated beauty market",
      solution: "Complete brand identity including logo, packaging, website, and social media strategy with AI product photography",
      metrics: [
        { label: "Launch Sales", before: "$0", after: "$450K", increase: "First Quarter" },
        { label: "Social Followers", before: "0", after: "125K", increase: "6 Months" },
        { label: "Press Features", before: "0", after: "18", increase: "Major Publications" },
        { label: "Brand Recognition", before: "0%", after: "34%", increase: "In Target Market" },
      ],
      testimonial: "They didn't just create a brand—they created a movement. We're now sold in 200+ stores nationwide.",
      testimonialAuthor: "Jessica Park, Founder",
      tags: ["Branding", "Web Design", "AI Photography", "Social Media"],
      duration: "5 months",
      caseStudySlug: "beauty-brand-launch",
    },
    {
      id: 4,
      title: "Fitness App Growth Campaign",
      client: "FitLife Mobile",
      category: "Marketing",
      image: fitnessAppImage,
      challenge: "Struggling to acquire users in competitive fitness app market with limited budget",
      solution: "Multi-channel performance marketing with influencer partnerships, UGC content, and data-driven optimization",
      metrics: [
        { label: "User Acquisition", before: "2K/mo", after: "45K/mo", increase: "+2150%" },
        { label: "Cost Per Install", before: "$8.50", after: "$1.90", increase: "-78%" },
        { label: "App Store Ranking", before: "#247", after: "#12", increase: "Fitness Category" },
        { label: "Monthly Revenue", before: "$18K", after: "$280K", increase: "+1456%" },
      ],
      testimonial: "The ROI on our marketing spend has been incredible. We're now a top-tier fitness app!",
      testimonialAuthor: "David Martinez, CMO",
      tags: ["Paid Ads", "Influencer Marketing", "UGC", "ASO"],
      duration: "6 months",
      caseStudySlug: "fitness-app-campaign",
    },
    {
      id: 5,
      title: "Home Decor Marketplace Platform",
      client: "Artisan Home Hub",
      category: "E-commerce",
      image: homeDecorImage,
      challenge: "Build a multi-vendor marketplace from scratch with AR preview technology",
      solution: "Custom-built platform with vendor onboarding, AR product visualization, and smart search",
      metrics: [
        { label: "Active Vendors", before: "0", after: "350", increase: "First Year" },
        { label: "Monthly GMV", before: "$0", after: "$1.2M", increase: "Year One" },
        { label: "AR Engagement", before: "N/A", after: "68%", increase: "Feature Adoption" },
        { label: "Repeat Buyers", before: "N/A", after: "43%", increase: "Customer Loyalty" },
      ],
      testimonial: "They built us a platform that rivals major marketplaces. The AR feature is a game-changer!",
      testimonialAuthor: "Amanda Roberts, Co-Founder",
      tags: ["E-commerce", "AR/VR", "Multi-vendor", "Custom Platform"],
      duration: "8 months",
      caseStudySlug: "luxury-fashion-ecommerce",
    },
    {
      id: 6,
      title: "Restaurant Booking Platform",
      client: "DineConnect",
      category: "UI/UX Design",
      image: restaurantImage,
      challenge: "Create seamless booking experience for restaurants and diners with real-time availability",
      solution: "Mobile-first platform with instant confirmations, smart recommendations, and integrated payments",
      metrics: [
        { label: "Monthly Bookings", before: "0", after: "52K", increase: "First 6 Months" },
        { label: "Restaurant Partners", before: "0", after: "1,200", increase: "Network Growth" },
        { label: "Booking Completion", before: "N/A", after: "89%", increase: "Success Rate" },
        { label: "User Satisfaction", before: "N/A", after: "4.8/5", increase: "App Rating" },
      ],
      testimonial: "The platform has revolutionized how diners discover and book tables at our restaurants.",
      testimonialAuthor: "Tom Wilson, Restaurant Group Owner",
      tags: ["Web App", "Mobile App", "UX Research", "Payments"],
      duration: "5 months",
      caseStudySlug: "tech-startup-dashboard",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary to-secondary">
              <Award className="h-4 w-4 mr-2 inline" />
              Award-Winning Work
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-display">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success Stories</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our portfolio of transformative projects and see the measurable impact we've delivered for brands across industries
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "200+", label: "Happy Clients" },
                { value: "450%", label: "Avg ROI" },
                { value: "98%", label: "Client Retention" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-gradient-to-r from-primary to-secondary" : ""}
                data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative aspect-[4/3] lg:aspect-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="text-sm text-primary font-semibold mb-2">{project.client}</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                          {project.title}
                        </h2>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="font-semibold">Challenge</span>
                          </div>
                          <p className="text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-5 w-5 text-secondary" />
                            <span className="font-semibold">Solution</span>
                          </div>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.map((metric, idx) => (
                          <div 
                            key={idx}
                            className="p-4 rounded-lg bg-primary/5 border border-primary/10"
                            data-testid={`metric-${project.id}-${idx}`}
                          >
                            <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs line-through text-muted-foreground">{metric.before}</span>
                              <span className="text-sm font-bold">{metric.after}</span>
                            </div>
                            <div className="text-sm font-semibold text-accent mt-1">{metric.increase}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="mb-6 p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                        <Quote className="h-5 w-5 text-secondary mb-2" />
                        <p className="text-sm italic mb-2">{project.testimonial}</p>
                        <p className="text-xs font-semibold">— {project.testimonialAuthor}</p>
                      </div>

                      {/* Tags & CTA */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <Link href={`/case-study/${project.caseStudySlug}`}>
                          <Button 
                            className="bg-gradient-to-r from-primary to-secondary"
                            data-testid={`button-case-study-${project.id}`}
                          >
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          {project.duration} project
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 200+ brands who have transformed their business with Double M Media
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection 
        title="Ready to See Your Brand Transformed?"
        description="Let's create your success story together"
        subtitle="Start your project with Double M Media today"
      />

      <Footer />
    </div>
  );
}
