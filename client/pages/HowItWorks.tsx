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
  Recycle,
  Users,
  Leaf,
  ArrowRight,
  Check,
  Upload,
  Search,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Sign Up & Create Profile",
      description:
        "Join our sustainable fashion community with a quick and easy registration process.",
      icon: Users,
      details: [
        "Create your free account in under 2 minutes",
        "Set up your style preferences and size information",
        "Get 50 bonus points just for joining",
        "Upload a profile photo to build trust",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    },
    {
      step: 2,
      title: "List Your Items",
      description:
        "Upload photos and details of clothes you no longer wear to start earning points.",
      icon: Upload,
      details: [
        "Take clear photos from multiple angles",
        "Add detailed descriptions and measurements",
        "Set your preferred swap or point value",
        "Choose between direct swaps or point redemption",
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
    },
    {
      step: 3,
      title: "Browse & Discover",
      description:
        "Explore amazing pre-loved fashion from our community of conscious shoppers.",
      icon: Search,
      details: [
        "Filter by size, category, and style preferences",
        "View detailed photos and item descriptions",
        "Check seller ratings and swap history",
        "Save items to your wishlist for later",
      ],
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop&crop=center",
    },
    {
      step: 4,
      title: "Swap or Redeem",
      description:
        "Make offers, negotiate swaps, or use your earned points to claim items you love.",
      icon: RefreshCw,
      details: [
        "Send swap requests with your own items",
        "Use points earned from successful listings",
        "Negotiate fair exchanges with other users",
        "Complete secure transactions through our platform",
      ],
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop&crop=center",
    },
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
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link to="/how-it-works" className="text-primary font-medium">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-light via-white to-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-6">
            🌱 Sustainable Fashion Guide
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            How <span className="text-primary">ReWear</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how easy it is to give your clothes a second life, reduce
            textile waste, and build a sustainable wardrobe with our simple
            4-step process.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {step.step === 1 && (
                    <Link to="/dashboard">
                      <Button size="lg" className="mt-6">
                        Sign Up Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  )}
                  {step.step === 2 && (
                    <Link to="/add-item">
                      <Button size="lg" className="mt-6">
                        List Your First Item
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  )}
                  {step.step === 3 && (
                    <Link to="/browse">
                      <Button size="lg" className="mt-6">
                        Start Browsing
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sage-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose ReWear?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a community that's making a real difference in fashion
              sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald" />
                </div>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every swap prevents 2.5kg of textile waste from ending up in
                  landfills
                </p>
                <div className="text-2xl font-bold text-emerald">127kg</div>
                <div className="text-sm text-muted-foreground">
                  Average CO₂ saved per user
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with like-minded fashion lovers who care about
                  sustainability
                </p>
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">
                  Active community members
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-earth" />
                </div>
                <CardTitle>Circular Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Keep fashion in circulation and reduce the need for new
                  production
                </p>
                <div className="text-2xl font-bold text-earth">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Items given new life
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands making a difference. Get 50 bonus points when you
            sign up today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Browse Items First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
