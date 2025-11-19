import { Brain, Target, Users, Sparkles, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Brain,
      title: "AI-Integrated Marketing",
      description: "We leverage cutting-edge AI tools for product photography, content creation, and campaign optimization to deliver results faster and more efficiently.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Data-Driven Approach",
      description: "Every decision is backed by analytics and insights. We don't guess—we test, measure, and optimize for maximum ROI on every campaign.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Access to our network of 500+ verified influencers across fashion, tech, sports, and beauty for authentic UGC campaigns that convert.",
      color: "accent",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning design and branding that captures attention and builds lasting connections with your target audience.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "450% average ROI, 50+ successful projects, and 5-star Trustpilot rating. Our results speak for themselves.",
      color: "secondary",
    },
    {
      icon: Shield,
      title: "Full-Service Partner",
      description: "From strategy to execution and optimization, we handle everything so you can focus on running your business.",
      color: "accent",
    },
  ];

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const bgColors = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
  };

  const borderColors = {
    primary: "border-primary/20",
    secondary: "border-secondary/20",
    accent: "border-accent/20",
  };

  const glowColors = {
    primary: "shadow-[0_0_40px_rgba(0,217,255,0.3)]",
    secondary: "shadow-[0_0_40px_rgba(255,0,128,0.3)]",
    accent: "shadow-[0_0_40px_rgba(0,255,136,0.3)]",
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            Why <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Brands Choose Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another agency. We're your growth partner.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const color = reason.color as keyof typeof iconColors;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${borderColors[color]} ${bgColors[color]} backdrop-blur-sm group hover-elevate active-elevate-2`}
                data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${bgColors[color]} mb-6 group-hover:${glowColors[color]} transition-shadow duration-300`}>
                  <Icon className={`h-10 w-10 ${iconColors[color]}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 font-display">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${bgColors[color]} rounded-bl-full opacity-20`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
