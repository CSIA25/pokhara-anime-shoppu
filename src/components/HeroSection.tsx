
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Truck } from 'lucide-react';

const HeroSection = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9uZSUyMHBpZWNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1lfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fHww"
  ];

  return (
    <section id="home" className="relative min-h-screen bg-anime-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sakura-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-anime-blue-300 rounded-full blur-2xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-sakura-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-zen font-bold leading-tight">
                <span className="bg-gradient-to-r from-sakura-500 via-sakura-400 to-anime-blue-500 bg-clip-text text-transparent">
                  Premium
                </span>
                <br />
                <span className="text-midnight-800">
                  Anime Store
                </span>
              </h1>
              <p className="text-xl text-midnight-600 max-w-lg mx-auto lg:mx-0">
                Your ultimate destination for authentic anime merchandise in Nepal. 
                From collectible figures to exclusive accessories.
              </p>
            </div>

            {/* Delivery Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <MapPin className="w-5 h-5 text-sakura-500" />
                <span className="text-midnight-700 font-medium">Mahendrapool, Pokhara</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Truck className="w-5 h-5 text-anime-blue-500" />
                <span className="text-midnight-700 font-medium">Nepal & India Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="anime-button group">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-sakura-300 text-sakura-600 hover:bg-sakura-50 px-8 py-3 rounded-full font-medium">
                View Collection
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Featured Product Cards */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`anime-card p-4 manga-accent ${
                    index % 2 === 0 ? 'animate-float' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-sakura-100 to-anime-blue-100 rounded-lg mb-3 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Anime Figure ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-zen font-semibold text-midnight-800 mb-1">
                    Anime Figure #{index + 1}
                  </h3>
                  <p className="text-sakura-600 font-medium">NPR 2,999</p>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sakura-500 to-sakura-600 text-white px-4 py-2 rounded-full shadow-lg animate-glow">
              <span className="font-medium">Free Shipping!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
