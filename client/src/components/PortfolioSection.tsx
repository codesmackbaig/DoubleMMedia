import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import luxuryFashionImage from "@assets/stock_images/luxury_fashion_ecomm_538516a0.jpg";
import dashboardImage from "@assets/stock_images/business_analytics_d_2fe9c2b3.jpg";
import beautyBrandImage from "@assets/stock_images/natural_organic_beau_61ee5ab7.jpg";
import fitnessAppImage from "@assets/stock_images/fitness_workout_app__a9a8ebed.jpg";

export default function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  const featuredProjects = [
    {
      title: "Luxury Fashion Store",
      category: "E-commerce",
      image: luxuryFashionImage,
      description: "Complete e-commerce redesign with 320% increase in conversions",
      tags: ["Shopify", "UI/UX", "Performance"],
      metric: "+320%",
      metricLabel: "Conversions",
      accentColor: "primary",
    },
    {
      title: "Tech Startup Dashboard",
      category: "UI/UX Design",
      image: dashboardImage,
      description: "SaaS dashboard with intuitive data visualization",
      tags: ["React", "Design System", "Analytics"],
      metric: "50K+",
      metricLabel: "Active Users",
      accentColor: "secondary",
    },
    {
      title: "Organic Beauty Brand",
      category: "Branding",
      image: beautyBrandImage,
      description: "Full brand identity and website for sustainable beauty",
      tags: ["Branding", "Web Design", "Photography"],
      metric: "15M+",
      metricLabel: "Impressions",
      accentColor: "accent",
    },
    {
      title: "Fitness App Campaign",
      category: "Marketing",
      image: fitnessAppImage,
      description: "Multi-channel campaign with 450% ROI",
      tags: ["Paid Ads", "Social", "Content"],
      metric: "+450%",
      metricLabel: "ROI",
      accentColor: "primary",
    },
  ];

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
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scroll through our success stories
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
          aria-label="Featured projects carousel"
          tabIndex={0}
          data-testid="portfolio-scroll-container"
        >
          {featuredProjects.map((project, index) => (
            <ProjectPanel
              key={project.title}
              project={project}
              index={index}
              data-testid={`featured-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
          
          {/* View All Projects Card */}
          <motion.div
            className="flex-shrink-0 w-[90vw] md:w-[600px] snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[500px] md:h-[600px] rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center group hover-elevate active-elevate-2 cursor-pointer">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  See More
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Amazing Work
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                  Explore our full portfolio of successful projects and transformations
                </p>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)]"
                    data-testid="button-view-all-portfolio"
                  >
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectPanel({ project, index, ...rest }: { project: any; index: number; [key: string]: any }) {
  const [, setLocation] = useLocation();
  
  const handleActivate = () => {
    setLocation('/portfolio');
  };
  
  const accentColors = {
    primary: {
      glow: "shadow-[0_0_60px_rgba(0,217,255,0.4)]",
      border: "border-primary/30",
      text: "text-primary",
      bg: "from-primary/20",
    },
    secondary: {
      glow: "shadow-[0_0_60px_rgba(255,0,128,0.4)]",
      border: "border-secondary/30",
      text: "text-secondary",
      bg: "from-secondary/20",
    },
    accent: {
      glow: "shadow-[0_0_60px_rgba(0,255,136,0.4)]",
      border: "border-accent/30",
      text: "text-accent",
      bg: "from-accent/20",
    },
  };

  const colors = accentColors[project.accentColor as keyof typeof accentColors];

  return (
    <motion.article
      className="flex-shrink-0 w-[90vw] md:w-[700px] snap-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      aria-label={`${project.title} - ${project.category} project`}
      {...rest}
    >
      <motion.div
        className={`relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border ${colors.border} bg-card/50 backdrop-blur-sm group cursor-pointer`}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} case study`}
        data-testid={`button-view-case-study-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
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
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} via-background/60 to-background/90`} />
        </motion.div>

        {/* Neon Grid Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated Glow */}
        <div className={`absolute inset-0 ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl`} />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
          {/* Top Section */}
          <div>
            <Badge className={`${colors.bg} ${colors.text} backdrop-blur-sm border-0 font-semibold mb-4`}>
              {project.category}
            </Badge>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Metric Highlight */}
            <div className={`text-6xl md:text-7xl font-bold ${colors.text} mb-2 font-display`}>
              {project.metric}
            </div>
            <div className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              {project.metricLabel}
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Magnetic CTA */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-lg`}
            >
              View Case Study
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
