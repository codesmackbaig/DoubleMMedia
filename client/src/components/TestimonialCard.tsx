import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export default function TestimonialCard({ quote, name, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="p-8 border-l-4 border-l-primary" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      
      <blockquote className="text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </Card>
  );
}
