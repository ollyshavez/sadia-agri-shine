import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Calculator, Target } from "lucide-react";

const BusinessModel = () => {
  const [bananaPeels, setBananaPeels] = useState(100);
  const [naturalOils, setNaturalOils] = useState(25);
  const [naturalWaxes, setNaturalWaxes] = useState(15);
  
  // Cost per kg in RWF
  const costs = {
    bananaPeels: 100,
    naturalOils: 1500,
    naturalWaxes: 2000,
    laborPerBatch: 5000,
    packagingPerUnit: 200
  };
  
  const totalIngredientCost = 
    (bananaPeels * costs.bananaPeels) +
    (naturalOils * costs.naturalOils) +
    (naturalWaxes * costs.naturalWaxes);
  
  const totalCost = totalIngredientCost + costs.laborPerBatch;
  const unitsProduced = Math.floor((bananaPeels + naturalOils + naturalWaxes) / 1.4); // 140g per unit
  const costPerUnit = (totalCost / unitsProduced) + costs.packagingPerUnit;
  const sellingPrice = 2500; // RWF per unit
  const profitPerUnit = sellingPrice - costPerUnit;
  const totalProfit = profitPerUnit * unitsProduced;
  const profitMargin = ((profitPerUnit / sellingPrice) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Business Model
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sustainable, scalable, and profitable—discover the economics behind SADIA AGRI PRO
              </p>
            </div>

            {/* Market Opportunity */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Market Opportunity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                  <TrendingUp className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">$2.5B</h3>
                  <p>Global shoe care market size, growing at 4.2% annually</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-secondary to-secondary/80 text-white">
                  <Target className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">12M</h3>
                  <p>Population of Rwanda, our initial target market</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                  <DollarSign className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Growing</h3>
                  <p>Demand for eco-friendly products in Africa</p>
                </Card>
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="mb-20 bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Competitive Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4">Product</th>
                      <th className="text-left py-4 px-4">Price (RWF)</th>
                      <th className="text-left py-4 px-4">Eco-Friendly</th>
                      <th className="text-left py-4 px-4">Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-bold text-primary">SADIA AGRI PRO</td>
                      <td className="py-4 px-4">2,500</td>
                      <td className="py-4 px-4">✅</td>
                      <td className="py-4 px-4">✅</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Imported Brand A</td>
                      <td className="py-4 px-4">3,500</td>
                      <td className="py-4 px-4">❌</td>
                      <td className="py-4 px-4">❌</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Imported Brand B</td>
                      <td className="py-4 px-4">4,000</td>
                      <td className="py-4 px-4">❌</td>
                      <td className="py-4 px-4">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-muted-foreground">
                We offer premium quality at 30-40% less than imported alternatives, making sustainability accessible.
              </p>
            </div>

            {/* Batch Calculator */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Calculator className="w-10 h-10" />
                  <h2 className="text-3xl font-bold">Production Cost Calculator</h2>
                </div>
                <p className="text-lg">
                  See how efficiently and affordably we can scale production. Adjust the inputs below to calculate 
                  costs, units produced, and profitability per batch.
                </p>
              </div>

              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <Label htmlFor="bananaPeels" className="text-lg font-semibold">
                      Banana Peels (kg)
                    </Label>
                    <Input
                      id="bananaPeels"
                      type="number"
                      value={bananaPeels}
                      onChange={(e) => setBananaPeels(Number(e.target.value))}
                      className="mt-2 text-lg"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {costs.bananaPeels} RWF per kg
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="naturalOils" className="text-lg font-semibold">
                      Natural Oils (kg)
                    </Label>
                    <Input
                      id="naturalOils"
                      type="number"
                      value={naturalOils}
                      onChange={(e) => setNaturalOils(Number(e.target.value))}
                      className="mt-2 text-lg"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {costs.naturalOils} RWF per kg
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="naturalWaxes" className="text-lg font-semibold">
                      Natural Waxes (kg)
                    </Label>
                    <Input
                      id="naturalWaxes"
                      type="number"
                      value={naturalWaxes}
                      onChange={(e) => setNaturalWaxes(Number(e.target.value))}
                      className="mt-2 text-lg"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {costs.naturalWaxes} RWF per kg
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Batch Results</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Units Produced</p>
                      <p className="text-2xl font-bold text-primary">{unitsProduced}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Cost Per Unit</p>
                      <p className="text-2xl font-bold">{Math.round(costPerUnit)} RWF</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Profit Per Unit</p>
                      <p className="text-2xl font-bold text-primary">{Math.round(profitPerUnit)} RWF</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Profit Margin</p>
                      <p className="text-2xl font-bold text-primary">{profitMargin}%</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">Total Batch Cost:</span>
                      <span className="font-bold">{Math.round(totalCost).toLocaleString()} RWF</span>
                    </div>
                    <div className="flex justify-between items-center text-lg mt-2">
                      <span className="font-semibold">Total Revenue (at 2,500 RWF/unit):</span>
                      <span className="font-bold">{(unitsProduced * sellingPrice).toLocaleString()} RWF</span>
                    </div>
                    <div className="flex justify-between items-center text-xl mt-3 pt-3 border-t border-border">
                      <span className="font-bold">Total Batch Profit:</span>
                      <span className="font-bold text-primary">{Math.round(totalProfit).toLocaleString()} RWF</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Scalability */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-3xl font-bold mb-6">Scalability & Growth</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Current Capacity</h3>
                  <p className="text-muted-foreground">
                    Our facility can currently produce 5,000 units per month, with plans to expand to 
                    20,000 units within the first year.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Distribution Strategy</h3>
                  <p className="text-muted-foreground">
                    We're partnering with local retailers, supermarkets, and shoe shops across Rwanda, 
                    with expansion plans into neighboring countries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Investment Opportunity</h3>
                  <p className="text-muted-foreground">
                    With proven product-market fit and strong profit margins, we're seeking investment to 
                    scale production and expand into regional markets.
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

export default BusinessModel;
