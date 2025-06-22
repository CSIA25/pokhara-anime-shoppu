
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Users, Award, Instagram, Youtube } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Heart, number: "5000+", label: "Happy Customers" },
    { icon: Award, number: "500+", label: "Products Available" },
    { icon: Users, number: "3+", label: "Years of Service" },
    { icon: MapPin, number: "2", label: "Countries Served" }
  ];

  return (
    <section id="about" className="py-16 bg-anime-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-zen font-bold text-midnight-800 mb-6">
                Our <span className="bg-gradient-to-r from-sakura-500 to-anime-blue-500 bg-clip-text text-transparent">Journey</span>
              </h2>
              <div className="space-y-4 text-lg text-midnight-600">
                <p>
                  Born from pure passion for anime culture, Anime Pokhara started as a small dream in the beautiful city of Pokhara, Nepal. We believe that every anime fan deserves access to authentic, high-quality merchandise that celebrates their favorite characters and stories.
                </p>
                <p>
                  Located in the heart of Mahendrapool, our store has become a haven for anime enthusiasts across Nepal and India. We carefully curate every product, ensuring authenticity and quality that matches your passion for anime.
                </p>
                <p>
                  From rare collectibles to everyday accessories, we're committed to bringing the magical world of anime right to your doorstep.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-zen font-semibold text-midnight-800">Visit Our Store</h3>
              <div className="flex items-center space-x-3 text-midnight-600">
                <MapPin className="w-5 h-5 text-sakura-500" />
                <span>Mahendrapool, Pokhara-8, Kaski, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-midnight-600">
                <span className="font-medium">Phone:</span>
                <span>+977-61-123456</span>
              </div>
              <div className="flex items-center space-x-3 text-midnight-600">
                <span className="font-medium">Email:</span>
                <span>hello@animepokhara.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-zen font-semibold text-midnight-800">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 py-3">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full px-6 py-3">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="anime-card text-center p-6">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-sakura-gradient rounded-full mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-zen font-bold text-midnight-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-midnight-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Store Image Placeholder */}
            <Card className="anime-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-sakura-200 via-anime-blue-200 to-sakura-300 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-12 h-12 text-sakura-500" />
                  </div>
                  <h3 className="text-2xl font-zen font-bold text-midnight-800">Our Store</h3>
                  <p className="text-midnight-600">Mahendrapool, Pokhara</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/60 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-sakura-400/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-8 w-4 h-4 bg-anime-blue-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
