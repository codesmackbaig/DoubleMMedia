import { DollarSign, Users, TrendingUp, Award } from "lucide-react";

export default function MetricsSection() {
  const metrics = [
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Revenue Generated",
    },
    {
      icon: Users,
      value: "200+",
      label: "Brands Served",
    },
    {
      icon: TrendingUp,
      value: "3.2x",
      label: "Avg. Conversion Increase",
    },
    {
      icon: Award,
      value: "8+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <metric.icon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
