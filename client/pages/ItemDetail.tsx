import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Recycle,
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function ItemDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [1, 2, 3, 4]; // Placeholder for image gallery

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-sage-light/30">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">ReWear</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse
              </a>
              <a
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/add-item"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                List Item
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">← Back to Browse</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-light to-sage-light rounded-2xl relative overflow-hidden">
              <div className="absolute inset-4 bg-white/80 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">
                  Item Photo {currentImage + 1}
                </span>
              </div>
              <Badge className="absolute top-4 left-4 bg-white/90 text-foreground border-none">
                Excellent Condition
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square bg-gradient-to-br from-emerald-light to-sage-light rounded-lg border-2 ${
                    currentImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="mb-2">
                  Jackets
                </Badge>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Vintage Denim Jacket
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span>Size M</span>
                <span>•</span>
                <span>Excellent Condition</span>
                <span>•</span>
                <span className="text-success font-semibold">Available</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/api/placeholder/48/48" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">Sarah Miller</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">4.8 rating</span>
                  <span className="text-sm text-muted-foreground">
                    • 23 swaps
                  </span>
                </div>
              </div>
              <Button variant="outline">View Profile</Button>
            </div>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This beautiful vintage denim jacket has been one of my
                  favorites, but I'm ready to pass it on to someone who will
                  love it as much as I have. It's from a sustainable brand and
                  features classic styling with modern comfort. Perfect for
                  layering or wearing as a statement piece.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">#vintage</Badge>
                  <Badge variant="outline">#denim</Badge>
                  <Badge variant="outline">#sustainable</Badge>
                  <Badge variant="outline">#classic</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Exchange Options</CardTitle>
                <CardDescription>
                  Choose how you'd like to get this item
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Direct Swap</h4>
                      <p className="text-sm text-muted-foreground">
                        Exchange one of your items for this one
                      </p>
                    </div>
                    <Button className="bg-emerald hover:bg-emerald/90">
                      Request Swap
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold flex items-center space-x-2">
                        <span>Redeem with Points</span>
                        <Badge className="bg-primary/10 text-primary">
                          150 pts
                        </Badge>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Use your earned points to claim this item
                      </p>
                    </div>
                    <Button variant="outline">Use Points</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You have 1,250 points available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Brand</p>
                    <p className="font-semibold">Sustainable Co.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Material</p>
                    <p className="font-semibold">100% Organic Cotton</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold">Classic Blue</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Listed</p>
                    <p className="font-semibold">2 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
