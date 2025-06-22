
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const ProductsSection = () => {
  const productImages = [
    "https://images.unsplash.com/photo-1592547097938-7942b22df3db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1547861533-ae8896b04d10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9uZSUyMHBpZWNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1lfGVufDB8fDB8fHww"
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Naruto Uzumaki Figure",
      price: "NPR 3,499",
      originalPrice: "NPR 4,199",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "Figures"
    },
    {
      id: 2,
      name: "Attack on Titan Poster Set",
      price: "NPR 899",
      originalPrice: "NPR 1,299",
      rating: 4.6,
      reviews: 89,
      badge: "Limited Edition",
      category: "Posters"
    },
    {
      id: 3,
      name: "Dragon Ball Keychain",
      price: "NPR 499",
      originalPrice: null,
      rating: 4.9,
      reviews: 256,
      badge: "New Arrival",
      category: "Accessories"
    },
    {
      id: 4,
      name: "One Piece Hoodie",
      price: "NPR 2,899",
      originalPrice: "NPR 3,499",
      rating: 4.7,
      reviews: 67,
      badge: "Hot Deal",
      category: "Clothing"
    },
    {
      id: 5,
      name: "Studio Ghibli Mug",
      price: "NPR 1,299",
      originalPrice: null,
      rating: 4.5,
      reviews: 143,
      badge: "Fan Favorite",
      category: "Lifestyle"
    },
    {
      id: 6,
      name: "Demon Slayer Sword",
      price: "NPR 4,999",
      originalPrice: "NPR 6,299",
      rating: 4.9,
      reviews: 78,
      badge: "Premium",
      category: "Collectibles"
    }
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      "Best Seller": "bg-sakura-500",
      "Limited Edition": "bg-anime-blue-500",
      "New Arrival": "bg-green-500",
      "Hot Deal": "bg-red-500",
      "Fan Favorite": "bg-purple-500",
      "Premium": "bg-yellow-500"
    };
    return colors[badge as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-zen font-bold text-midnight-800 mb-4">
            Featured <span className="bg-gradient-to-r from-sakura-500 to-anime-blue-500 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium anime merchandise, carefully curated for true anime enthusiasts.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Figures', 'Posters', 'Accessories', 'Clothing', 'Lifestyle', 'Collectibles'].map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={category === 'All' 
                ? 'anime-button' 
                : 'border-sakura-300 text-sakura-600 hover:bg-sakura-50 rounded-full'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="anime-card group overflow-hidden">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-sakura-100 to-anime-blue-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={productImages[index] || productImages[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="icon" className="bg-white/90 text-sakura-600 hover:bg-white">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="anime-button">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white`}>
                    {product.badge}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs text-sakura-600 border-sakura-300">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-midnight-600">{product.rating}</span>
                    <span className="text-sm text-midnight-400">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-zen font-semibold text-lg text-midnight-800 mb-3 group-hover:text-sakura-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-sakura-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-midnight-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="anime-button text-sm px-4 py-2">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="anime-button text-lg px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
