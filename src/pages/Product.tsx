import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Shield, Droplets, Leaf, CheckCircle } from "lucide-react";
import productJar from "@/assets/product-jar.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Banana Peel Shoe Polish
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium natural shoe care that protects your leather while protecting the planet
              </p>
            </div>

            {/* Product Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="animate-scale-in">
                <img 
                  src={productJar} 
                  alt="SADIA AGRI PRO Banana Peel Shoe Polish" 
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Why SADIA AGRI PRO is Your Shoes' Best Friend</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Superior Shine</h4>
                      <p className="text-muted-foreground">Achieve a brilliant, long-lasting shine that rivals premium brands</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Deep Nourishment</h4>
                      <p className="text-muted-foreground">Natural oils penetrate and condition leather, preventing cracks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Water Resistant</h4>
                      <p className="text-muted-foreground">Natural waxes create a protective barrier against moisture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Pleasant Natural Scent</h4>
                      <p className="text-muted-foreground">Light, natural aroma - no harsh chemical smell</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Easy Application</h4>
                      <p className="text-muted-foreground">Smooth consistency makes application quick and effortless</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before & After */}
            <div className="mb-20 bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">See The Difference</h2>
              <img 
                src={beforeAfter} 
                alt="Before and After Comparison" 
                className="rounded-xl shadow-card w-full"
              />
              <p className="text-center text-muted-foreground mt-6">
                Left: Before polish application | Right: After SADIA AGRI PRO treatment
              </p>
            </div>

            {/* How It Works */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Clean Your Shoes</h3>
                  <p className="text-muted-foreground">
                    Remove dirt and dust with a soft brush or cloth. Ensure the surface is dry.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Apply Polish</h3>
                  <p className="text-muted-foreground">
                    Use a soft cloth to apply a thin, even layer of polish in circular motions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Buff to Shine</h3>
                  <p className="text-muted-foreground">
                    After 5 minutes, buff with a clean cloth to reveal a brilliant shine.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Ingredients */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Key Ingredients</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Banana Peel Powder</h3>
                  <p className="text-muted-foreground">
                    Rich in natural pigments and conditioning agents. Provides color and nourishment to leather.
                  </p>
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Natural Oils</h3>
                  <p className="text-muted-foreground">
                    Coconut and other natural oils moisturize and protect leather, preventing drying and cracking.
                  </p>
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Natural Waxes</h3>
                  <p className="text-muted-foreground">
                    Beeswax and carnauba wax seal the leather and provide a lasting protective shine.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center mb-12">Complete Leather Care Benefits</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">Brilliant Shine</p>
                </div>
                <div className="text-center">
                  <Shield className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">Protects Leather</p>
                </div>
                <div className="text-center">
                  <Droplets className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">Moisturizes</p>
                </div>
                <div className="text-center">
                  <Leaf className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">100% Natural</p>
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

export default Product;
