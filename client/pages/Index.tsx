import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Recycle,
  Users,
  Leaf,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TShirt3D from "@/components/TShirt3D";
import Avatar3D from "@/components/Avatar3D";

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    category: "Jackets",
    size: "M",
    condition: "Excellent",
    points: 150,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop&crop=center",
    user: "Sarah M.",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Designer Silk Blouse",
    category: "Tops",
    size: "S",
    condition: "Like New",
    points: 120,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop&crop=center",
    user: "Emma K.",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Casual Summer Dress",
    category: "Dresses",
    size: "L",
    condition: "Good",
    points: 100,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&crop=center",
    user: "Lisa R.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Leather Ankle Boots",
    category: "Shoes",
    size: "8",
    condition: "Very Good",
    points: 180,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop&crop=center",
    user: "Maria S.",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Cozy Knit Sweater",
    category: "Sweaters",
    size: "M",
    condition: "Like New",
    points: 130,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=600&fit=crop&crop=center",
    user: "Alex R.",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Classic White Sneakers",
    category: "Shoes",
    size: "9",
    condition: "Very Good",
    points: 110,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop&crop=center",
    user: "Jordan K.",
    rating: 4.5,
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredItems.length) % featuredItems.length,
    );
  };

  const visibleItems = [
    featuredItems[currentSlide],
    featuredItems[(currentSlide + 1) % featuredItems.length],
    featuredItems[(currentSlide + 2) % featuredItems.length],
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">ReWear</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How it Works
              </Link>
              <Link
                to="/browse"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse Items
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=1200&fit=crop&crop=center')`,
          }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    🌱 Sustainable Fashion Platform
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Give Your Clothes a{" "}
                    <span className="text-primary">Second Life</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Join thousands of fashion-conscious individuals exchanging,
                    swapping, and discovering amazing pre-loved clothing. Reduce
                    waste, save money, and refresh your wardrobe sustainably.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/dashboard">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Start Swapping
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/browse">
                    <Button size="lg" variant="outline">
                      Browse Items
                    </Button>
                  </Link>
                  <Link to="/add-item">
                    <Button size="lg" variant="outline">
                      List an Item
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-muted-foreground">Items Exchanged</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5K+</div>
                    <div className="text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">85%</div>
                    <div className="text-muted-foreground">Waste Reduced</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Avatar3D className="mb-8" />
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-4">
                    <div
                      className="h-32 rounded-2xl shadow-lg bg-cover bg-center transform rotate-3 hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&crop=center')`,
                      }}
                    ></div>
                    <div
                      className="h-24 rounded-2xl shadow-lg bg-cover bg-center transform -rotate-2 hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center')`,
                      }}
                    ></div>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div
                      className="h-24 rounded-2xl shadow-lg bg-cover bg-center transform rotate-2 hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1544966503-7cc4ac882d5d?w=400&h=300&fit=crop&crop=center')`,
                      }}
                    ></div>
                    <div
                      className="h-32 rounded-2xl shadow-lg bg-cover bg-center transform -rotate-1 hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=400&h=600&fit=crop&crop=center')`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-sage-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              How ReWear Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, sustainable, and rewarding. Start your clothing exchange
              journey in three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">List Your Items</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Upload photos and details of clothes you no longer wear. Set
                  your swap preferences or point value.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Swap or Redeem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Browse amazing items and either request a direct swap or use
                  your earned points to redeem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Make an Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Refresh your wardrobe sustainably while helping reduce textile
                  waste and supporting circular fashion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section id="browse" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Items
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover amazing pre-loved fashion from our community
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleItems.map((item, index) => (
              <Card
                key={`${item.id}-${index}`}
                className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.backgroundImage =
                        "linear-gradient(45deg, hsl(var(--emerald-light)), hsl(var(--sage-light)))";
                      e.currentTarget.style.backgroundColor =
                        "hsl(var(--emerald-light))";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground border-none shadow-md">
                    {item.condition}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.category} • Size {item.size}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">
                          {item.points} pts
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-emerald-light rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {item.user}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Link to={`/item/${item.id}`} className="flex-1">
                        <Button className="w-full" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link to={`/item/${item.id}`} className="flex-1">
                        <Button variant="outline" className="w-full" size="sm">
                          Quick Swap
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/browse">
              <Button size="lg" variant="outline">
                View All Items
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of conscious fashionistas making a difference. Sign
            up today and get 50 bonus points to start swapping!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signin">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">ReWear</span>
              </div>
              <p className="text-white/70">
                Making fashion more sustainable, one swap at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    List an Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
