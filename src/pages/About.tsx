import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              About SADIA AGRI PRO
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-slide-up">
              Transforming waste into worth, one shoe at a time.
            </p>
            
            <div className="prose prose-lg max-w-none mb-16">
              <div className="bg-card rounded-2xl p-8 shadow-card mb-8 animate-scale-in">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SADIA AGRI PRO was born from a simple observation: Rwanda produces millions of tons of banana peels 
                  every year, most of which end up as waste. At the same time, shoe polish products in our markets 
                  are often expensive, imported, and contain harsh chemicals.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our founder, Sadia, saw an opportunity to solve both problems. Through research and innovation, 
                  we discovered that banana peels contain natural oils and compounds that are perfect for leather care. 
                  Today, we're proud to offer a 100% natural, locally-made shoe polish that performs as well as 
                  international brands while supporting our communities and protecting our environment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 shadow-card">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="leading-relaxed">
                  To revolutionize shoe care in Africa by providing sustainable, affordable, and high-quality products 
                  that create value from agricultural waste and empower local communities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white rounded-2xl p-8 shadow-card">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="leading-relaxed">
                  To become Africa's leading eco-friendly shoe care brand, setting new standards for sustainability 
                  and social impact in the personal care industry.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                    <p className="text-muted-foreground">
                      Every decision we make considers its environmental impact. We're committed to zero waste and circular economy principles.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Quality</h4>
                    <p className="text-muted-foreground">
                      Being eco-friendly doesn't mean compromising on performance. We deliver premium results every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Community</h4>
                    <p className="text-muted-foreground">
                      We source locally, employ locally, and reinvest in our communities. Our success is their success.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Innovation</h4>
                    <p className="text-muted-foreground">
                      We continuously research and develop new ways to improve our products and processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Meet Our Founder</h2>
              <div className="md:flex gap-8 items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Sadia</h3>
                  <p className="text-primary mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sadia is a passionate entrepreneur and environmental advocate from Rwanda. With a background in 
                    agricultural sciences and a vision for sustainable development, she founded SADIA AGRI PRO to 
                    demonstrate that business success and environmental responsibility can go hand in hand. Her 
                    innovative approach to waste valorization has earned recognition from local and international 
                    sustainability organizations.
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

export default About;
