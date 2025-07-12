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
  Leaf,
  Users,
  Heart,
  ArrowRight,
  Target,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Active Users",
      description: "Fashion-conscious individuals making a difference",
    },
    {
      icon: Recycle,
      value: "10,000+",
      label: "Items Exchanged",
      description: "Clothes given a second life through our platform",
    },
    {
      icon: Leaf,
      value: "635,000kg",
      label: "CO₂ Saved",
      description: "Environmental impact reduced through circular fashion",
    },
    {
      icon: Globe,
      value: "85%",
      label: "Waste Reduction",
      description: "Textile waste diverted from landfills",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former sustainability consultant with 10+ years in fashion industry",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Tech entrepreneur passionate about using technology for good",
    },
    {
      name: "Emma Thompson",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder focused on sustainable lifestyle movements",
    },
    {
      name: "David Park",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "UX designer creating beautiful, accessible experiences",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description:
        "Every decision we make prioritizes environmental impact and circular fashion principles.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our platform thrives on the connections and trust built within our fashion community.",
    },
    {
      icon: Heart,
      title: "Quality & Care",
      description:
        "We believe in giving clothes the love and care they deserve for their second life.",
    },
    {
      icon: Award,
      title: "Transparency",
      description:
        "Open communication, fair exchanges, and honest reviews build lasting relationships.",
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
              <Link to="/about" className="text-primary font-medium">
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
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&h=1200&fit=crop&crop=center')`,
          }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-6">
                🌱 Our Mission
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Revolutionizing Fashion Through{" "}
                <span className="text-primary">Sustainability</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                ReWear was born from a simple belief: fashion should be
                circular, sustainable, and accessible to everyone. We're
                building a community where great style doesn't come at the cost
                of our planet.
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sage-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Together, we're creating meaningful change in the fashion industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ReWear started when our founders, Sarah and Marcus, realized
                their closets were full of clothes they rarely wore while
                constantly buying new items. The fashion industry produces 92
                million tons of textile waste annually, yet millions of garments
                sit unused in wardrobes worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envisioned a platform where fashion lovers could connect,
                share, and discover amazing pre-loved pieces while reducing
                their environmental footprint. What started as a weekend project
                has grown into a thriving community of sustainable fashion
                enthusiasts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, ReWear is more than just a clothing exchange platform.
                We're a movement toward conscious consumption, community
                building, and proving that sustainable choices can be stylish,
                affordable, and fun.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=700&fit=crop&crop=center"
                alt="Sustainable fashion"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-emerald-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at ReWear
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind ReWear's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white text-center"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join the Fashion Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a community that's changing how we think about fashion,
            one swap at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Swapping Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
