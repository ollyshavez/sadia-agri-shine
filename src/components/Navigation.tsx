import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "The Product" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/business", label: "Business Model" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">SADIA AGRI PRO</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
