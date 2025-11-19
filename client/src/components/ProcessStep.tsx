import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProcessStep({ number, icon: Icon, title, description }: ProcessStepProps) {
  return (
    <div className="relative" data-testid={`step-${number}`}>
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-10 w-10 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            {number}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-sm">{description}</p>
      </div>
    </div>
  );
}
