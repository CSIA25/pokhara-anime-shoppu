
import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "Shop", href: "#shop" },
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" }
    ],
    "Categories": [
      { name: "Action Figures", href: "#" },
      { name: "Posters & Art", href: "#" },
      { name: "Clothing", href: "#" },
      { name: "Accessories", href: "#" }
    ],
    "Support": [
      { name: "Shipping Info", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  return (
    <footer className="bg-midnight-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sakura-gradient rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-zen font-bold bg-gradient-to-r from-sakura-400 to-anime-blue-400 bg-clip-text text-transparent">
                Anime Pokhara
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for authentic anime merchandise in Nepal. 
              Bringing the magical world of anime right to your doorstep.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-sakura-400" />
                <span className="text-sm">Mahendrapool, Pokhara, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-anime-blue-400" />
                <span className="text-sm">+977-61-123456</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-sm">hello@animepokhara.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-lg font-zen font-semibold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-sakura-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-zen font-semibold text-white mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Button 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full p-3"
                  size="icon"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-3"
                  size="icon"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-zen font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get notified about new arrivals and exclusive deals
              </p>
              <div className="flex max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-sakura-400"
                />
                <Button className="anime-button rounded-l-none rounded-r-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Anime Pokhara. Made with{' '}
            <Heart className="w-4 h-4 inline text-sakura-400" />{' '}
            for anime fans everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
