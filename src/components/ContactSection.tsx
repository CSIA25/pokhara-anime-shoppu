
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["Mahendrapool, Pokhara-8", "Kaski, Nepal"],
      color: "text-sakura-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+977-61-123456", "+977-98-765432"],
      color: "text-anime-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@animepokhara.com", "support@animepokhara.com"],
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon-Sat: 10AM - 8PM", "Sunday: 12PM - 6PM"],
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-zen font-bold text-midnight-800 mb-4">
            Get In <span className="bg-gradient-to-r from-sakura-500 to-anime-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            Have questions about our products or need help with your order? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-zen font-semibold text-midnight-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-midnight-800 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-midnight-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="anime-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-sakura-100 to-anime-blue-100 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-sakura-500 mx-auto mb-4" />
                  <h4 className="text-xl font-zen font-semibold text-midnight-800">Find Us Here</h4>
                  <p className="text-midnight-600">Mahendrapool, Pokhara</p>
                </div>
                
                {/* Decorative map pins */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-sakura-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-anime-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="anime-card">
              <CardHeader>
                <CardTitle className="text-2xl font-zen text-midnight-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-midnight-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border-sakura-200 focus:border-sakura-400 focus:ring-sakura-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-midnight-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="border-sakura-200 focus:border-sakura-400 focus:ring-sakura-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-midnight-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="border-sakura-200 focus:border-sakura-400 focus:ring-sakura-400 resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="anime-button w-full group">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
