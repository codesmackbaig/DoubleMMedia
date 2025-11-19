import { TrendingUp, Users, Star, Zap } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: 50,
      suffix: "+",
      label: "Successful Projects",
      description: "Delivered with exceptional results",
      color: "primary",
    },
    {
      icon: Users,
      value: 10,
      suffix: "M+",
      label: "Ad Impressions",
      description: "Across all campaigns",
      color: "secondary",
    },
    {
      icon: Star,
      value: 5,
      suffix: "",
      label: "Star Trustpilot Rating",
      description: "From verified clients",
      color: "accent",
    },
    {
      icon: Zap,
      value: 450,
      suffix: "%",
      label: "Average ROI",
      description: "For performance marketing",
      color: "primary",
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
    primary: "border-primary/30",
    secondary: "border-secondary/30",
    accent: "border-accent/30",
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]" />
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
            Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Numbers that speak louder than words
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const color = stat.color as keyof typeof iconColors;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${borderColors[color]} ${bgColors[color]} backdrop-blur-sm hover-elevate active-elevate-2 group`}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${bgColors[color]} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${iconColors[color]}`} />
                </div>

                {/* Value */}
                <div className={`text-5xl md:text-6xl font-bold ${iconColors[color]} mb-3 font-display`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Animated Glow on Hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                  style={{
                    background: `radial-gradient(circle at center, ${
                      color === 'primary' ? 'rgba(0,217,255,0.3)' :
                      color === 'secondary' ? 'rgba(255,0,128,0.3)' :
                      'rgba(0,255,136,0.3)'
                    }, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
