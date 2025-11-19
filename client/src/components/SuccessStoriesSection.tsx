import { ArrowRight, Target, Lightbulb, TrendingUp, Quote } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import luxuryFashionImage from "@assets/stock_images/luxury_fashion_ecomm_538516a0.jpg";
import dashboardImage from "@assets/stock_images/business_analytics_d_2fe9c2b3.jpg";
import beautyBrandImage from "@assets/stock_images/natural_organic_beau_61ee5ab7.jpg";
import fitnessAppImage from "@assets/stock_images/fitness_workout_app__a9a8ebed.jpg";

export default function SuccessStoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  const successStories = [
    {
      id: "luxury-fashion-ecommerce",
      title: "Luxury Fashion E-Commerce Transformation",
      category: "E-commerce & UX",
      image: luxuryFashionImage,
      client: "Premium Fashion Brand",
      intro: "A luxury fashion retailer struggling with low online conversions and high cart abandonment rates.",
      objective: "Redesign the entire e-commerce experience to increase conversions and average order value while maintaining brand prestige.",
      process: "Conducted UX audit, implemented AI-powered product recommendations, optimized checkout flow, and created stunning product photography.",
      outcome: "320% increase in conversions, 45% higher AOV, and 60% reduction in cart abandonment within 3 months.",
      tags: ["Shopify Plus", "UI/UX Design", "AI Integration"],
      metrics: [
        { value: "+320%", label: "Conversions" },
        { value: "+45%", label: "AOV" },
        { value: "-60%", label: "Cart Abandonment" }
      ],
      accentColor: "primary",
      testimonial: "Double M Media transformed our online presence. The results exceeded our wildest expectations!"
    },
    {
      id: "tech-startup-dashboard",
      title: "SaaS Dashboard Redesign for Scale",
      category: "UI/UX Design",
      image: dashboardImage,
      client: "B2B SaaS Startup",
      intro: "A rapidly growing SaaS company needed an intuitive dashboard that could scale with their expanding user base.",
      objective: "Create a data-rich interface that simplifies complex analytics while improving user engagement and retention.",
      process: "User research, iterative prototyping, custom data visualization components, and comprehensive design system creation.",
      outcome: "Grew from 5K to 50K+ active users with 92% user satisfaction and 40% increase in daily active usage.",
      tags: ["React", "Design System", "Data Viz"],
      metrics: [
        { value: "50K+", label: "Active Users" },
        { value: "92%", label: "User Satisfaction" },
        { value: "+40%", label: "Daily Usage" }
      ],
      accentColor: "secondary",
      testimonial: "The new dashboard is gorgeous and our users love it. Retention has never been higher."
    },
    {
      id: "beauty-brand-launch",
      title: "Sustainable Beauty Brand Launch",
      category: "Branding & Marketing",
      image: beautyBrandImage,
      client: "Organic Beauty Startup",
      intro: "A new sustainable beauty brand needed to make a splash in a crowded market with a limited budget.",
      objective: "Build brand awareness, establish market presence, and drive initial sales through integrated digital marketing.",
      process: "Full brand identity creation, influencer partnerships, UGC campaigns, and performance marketing across social platforms.",
      outcome: "15M+ impressions, 25K Instagram followers in 6 weeks, and sold out initial product line within 48 hours.",
      tags: ["Branding", "Influencer Marketing", "Social Media"],
      metrics: [
        { value: "15M+", label: "Impressions" },
        { value: "25K", label: "Followers" },
        { value: "48hrs", label: "Sellout Time" }
      ],
      accentColor: "accent",
      testimonial: "They didn't just create a brand—they created a movement. Our launch was beyond successful."
    },
    {
      id: "fitness-app-campaign",
      title: "Fitness App Growth Campaign",
      category: "Performance Marketing",
      image: fitnessAppImage,
      client: "Fitness Tech Company",
      intro: "A fitness app with great product-market fit needed to scale user acquisition profitably.",
      objective: "Drive app installs and subscriptions while maintaining a positive ROI across all marketing channels.",
      process: "Multi-channel paid advertising, A/B testing, conversion optimization, and creator partnerships for authentic UGC content.",
      outcome: "450% ROI, 100K+ app installs, and $2M in subscription revenue in Q1 alone.",
      tags: ["Paid Ads", "UGC Content", "App Marketing"],
      metrics: [
        { value: "+450%", label: "ROI" },
        { value: "100K+", label: "App Installs" },
        { value: "$2M", label: "Revenue" }
      ],
      accentColor: "primary",
      testimonial: "The campaign paid for itself 4x over. Best marketing investment we've ever made."
    },
  ];

  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how we turn challenges into victories.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container with Gradient Fades */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          role="region"
          aria-label="Success stories carousel"
          tabIndex={0}
          data-testid="success-stories-scroll-container"
        >
          {successStories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              data-testid={`success-story-${story.id}`}
            />
          ))}
          
          {/* View All Stories Card */}
          <motion.div
            className="flex-shrink-0 w-[90vw] md:w-[600px] snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[700px] md:h-[800px] rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center group hover-elevate active-elevate-2 cursor-pointer">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  Explore More
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                  See our complete portfolio of client transformations and results
                </p>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)]"
                    data-testid="button-view-all-stories"
                  >
                    View All Stories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story, index, ...rest }: { story: any; index: number; [key: string]: any }) {
  const [, setLocation] = useLocation();
  
  const handleActivate = () => {
    setLocation(`/case-study/${story.id}`);
  };
  
  const accentColors = {
    primary: {
      glow: "shadow-[0_0_60px_rgba(0,217,255,0.4)]",
      border: "border-primary/30",
      text: "text-primary",
      bg: "bg-primary/10",
    },
    secondary: {
      glow: "shadow-[0_0_60px_rgba(255,0,128,0.4)]",
      border: "border-secondary/30",
      text: "text-secondary",
      bg: "bg-secondary/10",
    },
    accent: {
      glow: "shadow-[0_0_60px_rgba(0,255,136,0.4)]",
      border: "border-accent/30",
      text: "text-accent",
      bg: "bg-accent/10",
    },
  };

  const colors = accentColors[story.accentColor as keyof typeof accentColors] || accentColors.primary;

  return (
    <motion.article
      className="flex-shrink-0 w-[90vw] md:w-[750px] snap-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      aria-label={`${story.title} - ${story.category} success story`}
      {...rest}
    >
      <motion.div
        className={`relative h-[700px] md:h-[800px] rounded-2xl overflow-hidden border ${colors.border} bg-card/50 backdrop-blur-sm group cursor-pointer`}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        role="button"
        tabIndex={0}
        aria-label={`View ${story.title} case study`}
        data-testid={`button-view-case-study-${story.id}`}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleActivate();
          }
        }}
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} via-background/80 to-background/95`} />
        </motion.div>

        {/* Neon Grid Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 md:p-10 overflow-y-auto">
          {/* Top Section - Category & Client */}
          <div>
            <Badge className={`${colors.bg} ${colors.text} backdrop-blur-sm border-0 font-semibold mb-3`}>
              {story.category}
            </Badge>
            <p className="text-sm text-muted-foreground mb-4">Client: {story.client}</p>
          </div>

          {/* Main Content - Story Snapshot */}
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight font-display mb-4">
              {story.title}
            </h3>

            {/* Intro */}
            <div className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                {story.intro}
              </p>
            </div>

            {/* Objective */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Target className={`h-5 w-5 ${colors.text}`} />
                <h4 className="font-semibold text-lg">Objective</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {story.objective}
              </p>
            </div>

            {/* Process */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lightbulb className={`h-5 w-5 ${colors.text}`} />
                <h4 className="font-semibold text-lg">Our Approach</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {story.process}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className={`h-5 w-5 ${colors.text}`} />
                <h4 className="font-semibold text-lg">Results</h4>
              </div>
              <p className="text-foreground font-medium leading-relaxed pl-7">
                {story.outcome}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {story.metrics.map((metric: any, idx: number) => (
                <div key={idx} className={`text-center p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className={`p-6 rounded-lg border ${colors.border} ${colors.bg}/50 backdrop-blur-sm`}>
              <Quote className={`h-6 w-6 ${colors.text} mb-3`} />
              <p className="text-sm italic text-foreground leading-relaxed">
                "{story.testimonial}"
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`text-xs ${colors.text} border-${story.accentColor}/30`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-6"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`inline-flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-4 transition-all`}>
              Read Full Case Study
              <ArrowRight className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
