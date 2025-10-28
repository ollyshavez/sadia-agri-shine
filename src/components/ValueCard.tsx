import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
}

const ValueCard = ({ icon: Icon, title, description, variant = "primary" }: ValueCardProps) => {
  const bgClass = variant === "primary" 
    ? "bg-gradient-to-br from-primary to-primary/80" 
    : "bg-gradient-to-br from-secondary to-secondary/80";
    
  return (
    <div className={`${bgClass} text-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in`}>
      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
