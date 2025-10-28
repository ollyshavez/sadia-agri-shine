import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Recycle, Users, TrendingUp, Heart, Leaf } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Commitment to a <span className="text-primary">Greener Rwanda</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sustainability isn't just a buzzword for us—it's the foundation of everything we do
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-20 animate-scale-in">
              <img 
                src={sustainabilityImage} 
                alt="Rwandan farmers collecting banana peels" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>

            {/* Zero Waste Story */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <Recycle className="w-12 h-12" />
                  <h2 className="text-4xl font-bold">Zero Waste Innovation</h2>
                </div>
                <p className="text-xl leading-relaxed">
                  Every year, Rwanda produces over 1 million tons of banana waste. Instead of letting these 
                  valuable resources end up in landfills, we transform them into premium shoe care products.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-accent">1M+</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tons of Banana Waste</h3>
                  <p className="text-muted-foreground">Generated annually in Rwanda</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">100%</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Zero Waste</h3>
                  <p className="text-muted-foreground">All materials are fully utilized</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-secondary">50+</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Local Suppliers</h3>
                  <p className="text-muted-foreground">Partnered banana farmers</p>
                </div>
              </div>
            </div>

            {/* The Process */}
            <div className="mb-20 bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">From Waste to Worth</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collection</h3>
                    <p className="text-muted-foreground">
                      We partner with local banana farmers and markets to collect peels that would otherwise be discarded.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Processing</h3>
                    <p className="text-muted-foreground">
                      Peels are cleaned, dried, and processed into fine powder using energy-efficient methods.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Formulation</h3>
                    <p className="text-muted-foreground">
                      Banana powder is blended with natural oils and waxes to create our premium polish formula.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                    <p className="text-muted-foreground">
                      Each batch is tested to ensure consistent quality and performance before packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Local Sourcing</h3>
                  <p className="text-muted-foreground mb-4">
                    We work directly with over 50 banana farmers across Rwanda, providing them with a new income 
                    stream from what was previously waste material.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Fair prices for banana peels
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Regular, predictable income
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Training and support provided
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Job Creation</h3>
                  <p className="text-muted-foreground mb-4">
                    Our production facility employs local workers, with a focus on providing opportunities for 
                    women and youth in rural communities.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      20+ direct employees
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Fair wages and benefits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Skills training programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Environmental Benefits */}
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center mb-12">Environmental Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Reduced Landfill Waste</h3>
                  <p>
                    Every ton of banana peels we process is one less ton in landfills, reducing methane emissions.
                  </p>
                </div>
                
                <div className="text-center">
                  <Leaf className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">No Harmful Chemicals</h3>
                  <p>
                    Our 100% natural formula means no toxic runoff or chemical pollution in water systems.
                  </p>
                </div>
                
                <div className="text-center">
                  <Recycle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Circular Economy</h3>
                  <p>
                    We're proving that agricultural waste can be a valuable resource, inspiring other initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
