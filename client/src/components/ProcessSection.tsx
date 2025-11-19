import { Search, Lightbulb, Rocket, LineChart } from "lucide-react";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Discovery",
      description: "Deep dive into your business, audience, and competitive landscape.",
    },
    {
      number: "2",
      icon: Lightbulb,
      title: "Strategy",
      description: "Craft a custom roadmap aligned with your growth objectives.",
    },
    {
      number: "3",
      icon: Rocket,
      title: "Execution",
      description: "Launch data-driven campaigns with precision and creativity.",
    },
    {
      number: "4",
      icon: LineChart,
      title: "Optimization",
      description: "Continuously refine and scale based on performance insights.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to transforming your e-commerce business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
