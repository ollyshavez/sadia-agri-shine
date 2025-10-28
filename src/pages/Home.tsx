import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import { Leaf, Sparkles, Users, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-shoe.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              SADIA AGRI PRO: <span className="text-accent">Shine Responsibly.</span>
              <br />Nature's Polish for Your Shoes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Revolutionizing shoe care with sustainable banana peel technology from Rwanda
            </p>
            <div className="flex gap-4">
              <Link to="/product">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Explore Our Product
                </Button>
              </Link>
              <Link to="/business">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-foreground text-lg px-8">
                  View Business Model
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Leaf}
              title="Eco-Friendly"
              description="Zero Waste, Natural Ingredients. Transform banana peels into premium shoe care."
              variant="primary"
            />
            <ValueCard
              icon={Sparkles}
              title="Superior Shine"
              description="Effective, long-lasting results that rival traditional polishes."
              variant="secondary"
            />
            <ValueCard
              icon={Users}
              title="Community Impact"
              description="Local sourcing and job creation. Empowering Rwandan communities."
              variant="primary"
            />
            <ValueCard
              icon={DollarSign}
              title="Affordable"
              description="Cost-effective solution without compromising on quality."
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why SADIA AGRI PRO?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just selling shoe polish. We're creating a sustainable future, one shoe at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">100% Natural</h3>
              <p className="text-muted-foreground">
                Made from upcycled banana peels and natural oils. No harsh chemicals, just pure nature.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Results</h3>
              <p className="text-muted-foreground">
                Deep conditioning, water resistance, and a brilliant shine that lasts.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Social Impact</h3>
              <p className="text-muted-foreground">
                Every purchase supports local farmers and creates sustainable employment in Rwanda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Shoe Care?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join us in creating a more sustainable future while keeping your shoes looking their best.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Get in Touch
              </Button>
            </Link>
            <Link to="/product">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
