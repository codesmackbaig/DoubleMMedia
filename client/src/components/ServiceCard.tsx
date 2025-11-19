import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-8 hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      <button className="inline-flex items-center gap-2 text-primary font-medium hover-elevate px-3 py-2 rounded-md">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </button>
    </Card>
  );
}
