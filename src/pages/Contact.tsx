import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about our product or interested in partnering? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@sadiaagripro.rw</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground">+250 XXX XXX XXX</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground">Kigali, Rwanda</p>
              </Card>
            </div>

            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-lg">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="mt-2"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-lg">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2 min-h-[150px]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="mt-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
              <p className="text-xl mb-6">
                We're always looking for distributors, retailers, and investors who share our vision 
                for sustainable business.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Mail className="w-4 h-4 mr-2" />
                partnerships@sadiaagripro.rw
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
