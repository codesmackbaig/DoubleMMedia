import { Badge } from "./ui/badge";

interface PortfolioCardProps {
  image: string;
  client: string;
  tags: string[];
  metric: string;
  className?: string;
}

export default function PortfolioCard({ image, client, tags, metric, className = "" }: PortfolioCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl hover-elevate active-elevate-2 cursor-pointer transition-all ${className}`}
      data-testid={`card-portfolio-${client.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={client}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{client}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-0">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-primary font-bold text-lg">{metric}</p>
      </div>
    </div>
  );
}
