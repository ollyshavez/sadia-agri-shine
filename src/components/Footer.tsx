import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">SADIA AGRI PRO</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Revolutionizing shoe care with sustainable banana peel technology from Rwanda.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/product" className="hover:text-accent transition-colors">The Product</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/business" className="hover:text-accent transition-colors">Business Model</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@sadiaagripro.rw</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+250 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} SADIA AGRI PRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
