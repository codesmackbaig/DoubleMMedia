import { useParams, Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Target, Lightbulb, TrendingUp, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import luxuryFashionImage from "@assets/stock_images/luxury_fashion_ecomm_538516a0.jpg";
import dashboardImage from "@assets/stock_images/business_analytics_d_2fe9c2b3.jpg";
import beautyBrandImage from "@assets/stock_images/natural_organic_beau_61ee5ab7.jpg";
import fitnessAppImage from "@assets/stock_images/fitness_workout_app__a9a8ebed.jpg";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top when component mounts or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Full case study data (matches the success stories from SuccessStoriesSection)
  const caseStudies: Record<string, any> = {
    "luxury-fashion-ecommerce": {
      title: "Luxury Fashion E-Commerce Transformation",
      category: "E-commerce & UX",
      client: "Premium Fashion Brand",
      timeline: "3 months",
      image: luxuryFashionImage,
      intro: "A luxury fashion retailer struggling with low online conversions and high cart abandonment rates.",
      challenge: "The client's existing e-commerce platform suffered from poor user experience, slow load times, and a checkout process that frustrated even their most loyal customers. With cart abandonment at 75% and conversions stagnating, they were losing significant revenue opportunities.",
      objective: "Redesign the entire e-commerce experience to increase conversions and average order value while maintaining brand prestige.",
      solution: {
        overview: "We implemented a comprehensive redesign strategy combining UX best practices with cutting-edge e-commerce technology.",
        approach: [
          "Conducted in-depth UX audit and user testing with target customers",
          "Redesigned the entire customer journey with focus on mobile-first experience",
          "Implemented AI-powered product recommendations based on browsing behavior",
          "Optimized checkout flow reducing it from 7 steps to 3",
          "Created professional product photography with AI-powered virtual try-on",
          "Implemented performance optimizations achieving sub-2-second load times"
        ]
      },
      results: [
        { metric: "+320%", label: "Increase in conversions", description: "From 1.2% to 5.1% conversion rate" },
        { metric: "+45%", label: "Higher average order value", description: "From $85 to $123 per transaction" },
        { metric: "-60%", label: "Reduction in cart abandonment", description: "From 75% to 30%" },
        { metric: "2.1s", label: "Average page load time", description: "Down from 8.5 seconds" }
      ],
      testimonial: {
        text: "Double M Media transformed our online presence. The results exceeded our wildest expectations. Not only did we see immediate improvements in conversion rates, but our customers are also raving about the new shopping experience.",
        author: "Sarah Chen",
        position: "CEO, Premium Fashion Brand"
      },
      tags: ["Shopify Plus", "UI/UX Design", "AI Integration", "Performance Optimization"],
      accentColor: "primary"
    },
    "tech-startup-dashboard": {
      title: "SaaS Dashboard Redesign for Scale",
      category: "UI/UX Design",
      client: "B2B SaaS Startup",
      timeline: "4 months",
      image: dashboardImage,
      intro: "A rapidly growing SaaS company needed an intuitive dashboard that could scale with their expanding user base.",
      challenge: "As the platform grew from 5K to potential 50K+ users, the existing dashboard became cluttered and confusing. Users struggled to find key features, and the interface couldn't handle the complexity of new data visualization needs.",
      objective: "Create a data-rich interface that simplifies complex analytics while improving user engagement and retention.",
      solution: {
        overview: "We developed a comprehensive design system and rebuilt the dashboard from the ground up with scalability in mind.",
        approach: [
          "Conducted extensive user research with 100+ customers across different segments",
          "Created custom data visualization components optimized for large datasets",
          "Built a comprehensive design system with 200+ reusable components",
          "Implemented role-based views for different user types (admins, analysts, viewers)",
          "Added real-time collaboration features and customizable dashboards",
          "Ensured WCAG AA accessibility compliance throughout"
        ]
      },
      results: [
        { metric: "50K+", label: "Active users supported", description: "10x growth from initial 5K users" },
        { metric: "92%", label: "User satisfaction score", description: "Up from 68%" },
        { metric: "+40%", label: "Increase in daily active usage", description: "Users spending more time in platform" },
        { metric: "-55%", label: "Reduction in support tickets", description: "Thanks to improved UX" }
      ],
      testimonial: {
        text: "The new dashboard is gorgeous and our users love it. Retention has never been higher. The design system they built will serve us for years to come as we continue to scale.",
        author: "Michael Rodriguez",
        position: "Founder, TechVision SaaS"
      },
      tags: ["React", "Design System", "Data Visualization", "Accessibility"],
      accentColor: "secondary"
    },
    "beauty-brand-launch": {
      title: "Sustainable Beauty Brand Launch",
      category: "Branding & Marketing",
      client: "Organic Beauty Startup",
      timeline: "6 weeks",
      image: beautyBrandImage,
      intro: "A new sustainable beauty brand needed to make a splash in a crowded market with a limited budget.",
      challenge: "Launching a new brand in the competitive beauty industry with minimal budget and no existing audience. Needed to establish credibility, build brand awareness, and drive initial sales quickly.",
      objective: "Build brand awareness, establish market presence, and drive initial sales through integrated digital marketing.",
      solution: {
        overview: "We executed a multi-channel launch strategy combining branding, influencer partnerships, and performance marketing.",
        approach: [
          "Created complete brand identity including logo, packaging, and brand guidelines",
          "Partnered with 25 micro-influencers in sustainable beauty niche",
          "Launched UGC campaign with #CleanBeautyRevolution hashtag",
          "Executed targeted paid social campaigns on Instagram and TikTok",
          "Built and launched Shopify e-commerce site in 3 weeks",
          "Implemented email marketing automation and SMS campaigns"
        ]
      },
      results: [
        { metric: "15M+", label: "Total impressions", description: "Across all channels in first 6 weeks" },
        { metric: "25K", label: "Instagram followers", description: "Gained in 6 weeks organically" },
        { metric: "48 hours", label: "Time to sell out", description: "Initial product line sold out" },
        { metric: "3.8x", label: "Return on ad spend", description: "Profitable from day one" }
      ],
      testimonial: {
        text: "They didn't just create a brand—they created a movement. Our launch was beyond successful. We're now scaling production to meet demand and planning our Series A funding round.",
        author: "Emma Thompson",
        position: "Founder, Pure Beauty Organics"
      },
      tags: ["Branding", "Influencer Marketing", "Social Media", "E-commerce"],
      accentColor: "accent"
    },
    "fitness-app-campaign": {
      title: "Fitness App Growth Campaign",
      category: "Performance Marketing",
      client: "Fitness Tech Company",
      timeline: "3 months (Q1)",
      image: fitnessAppImage,
      intro: "A fitness app with great product-market fit needed to scale user acquisition profitably.",
      challenge: "The app had strong retention and user love, but struggled with profitable user acquisition. Previous campaigns had poor ROAS and high cost per install.",
      objective: "Drive app installs and subscriptions while maintaining a positive ROI across all marketing channels.",
      solution: {
        overview: "We implemented a data-driven multi-channel approach with heavy focus on creative testing and UGC content.",
        approach: [
          "Launched campaigns across Facebook, Instagram, TikTok, and Google App Campaigns",
          "Created 100+ video ad variations through A/B testing",
          "Partnered with 50+ fitness influencers for authentic UGC content",
          "Implemented advanced conversion tracking and attribution modeling",
          "Optimized App Store and Google Play listings for conversion",
          "Built automated bidding strategies based on LTV predictions"
        ]
      },
      results: [
        { metric: "+450%", label: "Return on ad spend", description: "Consistently profitable scaling" },
        { metric: "100K+", label: "New app installs", description: "In Q1 alone" },
        { metric: "$2M", label: "Subscription revenue", description: "Generated in first quarter" },
        { metric: "$12", label: "Cost per install", description: "Down from $45" }
      ],
      testimonial: {
        text: "The campaign paid for itself 4x over. Best marketing investment we've ever made. They didn't just run ads—they built a sustainable growth engine for our business.",
        author: "David Park",
        position: "Head of Growth, FitLife App"
      },
      tags: ["Paid Ads", "UGC Content", "App Marketing", "Performance Marketing"],
      accentColor: "primary"
    },
  };

  const study = caseStudies[id || ""];

  if (!study) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const accentColors = {
    primary: {
      text: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/30",
    },
    secondary: {
      text: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/30",
    },
    accent: {
      text: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/30",
    },
  };

  const colors = accentColors[study.accentColor as keyof typeof accentColors];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 group" data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className={`${colors.bg} ${colors.text} mb-4`}>{study.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {study.intro}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Timeline: {study.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Client: {study.client}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className={`h-8 w-8 ${colors.text}`} />
            <h2 className="text-3xl font-bold font-display">The Challenge</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {study.challenge}
          </p>
        </motion.section>

        {/* Objective */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className={`h-8 w-8 ${colors.text}`} />
            <h2 className="text-3xl font-bold font-display">Our Objective</h2>
          </div>
          <p className="text-lg leading-relaxed">
            {study.objective}
          </p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className={`h-8 w-8 ${colors.text}`} />
            <h2 className="text-3xl font-bold font-display">The Solution</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            {study.solution.overview}
          </p>
          <ul className="space-y-4">
            {study.solution.approach.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className={`h-5 w-5 ${colors.text} mt-1 flex-shrink-0`} />
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className={`h-8 w-8 ${colors.text}`} />
            <h2 className="text-3xl font-bold font-display">The Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.results.map((result: any, index: number) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg}`}
              >
                <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                  {result.metric}
                </div>
                <div className="text-lg font-semibold mb-1">{result.label}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl border ${colors.border} ${colors.bg}`}
        >
          <Quote className={`h-10 w-10 ${colors.text} mb-6`} />
          <blockquote className="text-xl leading-relaxed mb-6 italic">
            "{study.testimonial.text}"
          </blockquote>
          <div>
            <div className="font-bold text-lg">{study.testimonial.author}</div>
            <div className="text-muted-foreground">{study.testimonial.position}</div>
          </div>
        </motion.section>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {study.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className={`${colors.text} ${colors.border}`}>
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 border-t border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Ready for Similar Results?</h3>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              data-testid="button-start-your-project"
            >
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
