import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Recycle,
  Search,
  Filter,
  Star,
  Heart,
  Grid3X3,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const allItems = [
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
    brand: "Levi's",
    tags: ["vintage", "denim", "classic"],
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
    brand: "Theory",
    tags: ["silk", "professional", "elegant"],
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
    brand: "Zara",
    tags: ["summer", "casual", "floral"],
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
    brand: "Dr. Martens",
    tags: ["leather", "boots", "durable"],
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
    brand: "Uniqlo",
    tags: ["cozy", "warm", "winter"],
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
    brand: "Adidas",
    tags: ["sneakers", "white", "classic"],
  },
  {
    id: 7,
    title: "Elegant Evening Gown",
    category: "Dresses",
    size: "M",
    condition: "Excellent",
    points: 250,
    image:
      "https://images.unsplash.com/photo-1566479179817-c7d8789e9295?w=400&h=600&fit=crop&crop=center",
    user: "Grace L.",
    rating: 4.9,
    brand: "BCBG",
    tags: ["elegant", "formal", "special occasion"],
  },
  {
    id: 8,
    title: "Warm Wool Coat",
    category: "Outerwear",
    size: "L",
    condition: "Good",
    points: 200,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc4ac882d5d?w=400&h=600&fit=crop&crop=center",
    user: "Michael B.",
    rating: 4.8,
    brand: "Wool & Co",
    tags: ["wool", "winter", "coat"],
  },
];

export default function Browse() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");

  const categories = [
    "all",
    "Jackets",
    "Tops",
    "Dresses",
    "Shoes",
    "Sweaters",
    "Outerwear",
  ];
  const sizes = ["all", "XS", "S", "M", "L", "XL", "6", "7", "8", "9", "10"];
  const conditions = ["all", "Like New", "Excellent", "Very Good", "Good"];

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSize = selectedSize === "all" || item.size === selectedSize;
    const matchesCondition =
      selectedCondition === "all" || item.condition === selectedCondition;

    return matchesSearch && matchesCategory && matchesSize && matchesCondition;
  });

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
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How it Works
              </Link>
              <Link to="/browse" className="text-primary font-medium">
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

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-emerald-light to-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Browse Amazing Fashion
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover pre-loved clothing from our sustainable fashion community
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by item, brand, or tag..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size === "all" ? "All Sizes" : size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedCondition}
                  onValueChange={setSelectedCondition}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((condition) => (
                      <SelectItem key={condition} value={condition}>
                        {condition === "all" ? "All Conditions" : condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} of {allItems.length} items
            </p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground border-none shadow-md">
                      {item.condition}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {item.brand} • Size {item.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary text-sm">
                            {item.points} pts
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 bg-emerald-light rounded-full"></div>
                          <span className="text-xs text-muted-foreground">
                            {item.user}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">
                            {item.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-1 pt-2">
                        <Link to={`/item/${item.id}`} className="flex-1">
                          <Button className="w-full" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.brand} • {item.category} • Size {item.size}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-primary text-lg">
                              {item.points} pts
                            </div>
                            <Badge variant="secondary">{item.condition}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
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
                        <div className="flex items-center space-x-2">
                          <Link to={`/item/${item.id}`}>
                            <Button>View Details</Button>
                          </Link>
                          <Button variant="outline">
                            <Heart className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedSize("all");
                  setSelectedCondition("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
