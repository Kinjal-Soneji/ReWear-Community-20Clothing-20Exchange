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
  Plus,
  Star,
  Package,
  ArrowRightLeft,
  Coins,
  User,
  Settings,
  Check,
  X,
  Clock,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

// Sample swap requests data
const initialSwapRequests = [
  {
    id: 1,
    requesterId: "user_123",
    requesterName: "Sarah Chen",
    requesterImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    requestedItem: {
      id: 1,
      title: "Vintage Denim Jacket",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop&crop=center",
    },
    offeredItem: {
      id: 2,
      title: "Designer Silk Blouse",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop&crop=center",
    },
    message:
      "Hi! I'd love to swap my silk blouse for your vintage jacket. It's in excellent condition!",
    timestamp: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    requesterId: "user_456",
    requesterName: "Emma Rodriguez",
    requesterImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    requestedItem: {
      id: 3,
      title: "Summer Floral Dress",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop&crop=center",
    },
    offeredItem: {
      id: 4,
      title: "Cozy Knit Sweater",
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=100&h=100&fit=crop&crop=center",
    },
    message:
      "Perfect for the season! Would love to trade my sweater for your dress.",
    timestamp: "5 hours ago",
    status: "pending",
  },
  {
    id: 3,
    requesterId: "user_789",
    requesterName: "Michael Park",
    requesterImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    requestedItem: {
      id: 1,
      title: "Vintage Denim Jacket",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop&crop=center",
    },
    offeredItem: {
      id: 5,
      title: "Classic White Sneakers",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    },
    message: "Great condition sneakers! Perfect trade for your jacket.",
    timestamp: "1 day ago",
    status: "pending",
  },
];

export default function Dashboard() {
  const [swapRequests, setSwapRequests] = useState(initialSwapRequests);

  const handleAcceptSwap = (requestId: number) => {
    setSwapRequests((prev) =>
      prev.map((request) =>
        request.id === requestId ? { ...request, status: "accepted" } : request,
      ),
    );
    // Here you would typically make an API call to accept the swap
    console.log(`Swap request ${requestId} accepted`);
  };

  const handleDeclineSwap = (requestId: number) => {
    setSwapRequests((prev) =>
      prev.map((request) =>
        request.id === requestId ? { ...request, status: "declined" } : request,
      ),
    );
    // Here you would typically make an API call to decline the swap
    console.log(`Swap request ${requestId} declined`);
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
              <a href="/dashboard" className="text-primary font-medium">
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
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Manage your items, track swaps, and explore new sustainable fashion
            opportunities.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Points Balance
                  </p>
                  <p className="text-2xl font-bold text-primary">1,250</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Listed Items</p>
                  <p className="text-2xl font-bold text-emerald">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Swap Requests</p>
                  <p className="text-2xl font-bold text-sage">
                    {
                      swapRequests.filter((req) => req.status === "pending")
                        .length
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-earth/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-earth" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="text-2xl font-bold text-earth">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Quick Actions</span>
                </CardTitle>
                <CardDescription>Get started with common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button className="h-20 flex-col space-y-2">
                    <Plus className="w-6 h-6" />
                    <span>List New Item</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Package className="w-6 h-6" />
                    <span>Browse Items</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <User className="w-6 h-6" />
                    <span>Edit Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Swap Requests */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowRightLeft className="w-5 h-5 text-primary" />
                  <span>Swap Requests</span>
                  {swapRequests.filter((req) => req.status === "pending")
                    .length > 0 && (
                    <Badge className="bg-primary/10 text-primary">
                      {
                        swapRequests.filter((req) => req.status === "pending")
                          .length
                      }
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  Review and respond to swap requests from other users
                </CardDescription>
              </CardHeader>
              <CardContent>
                {swapRequests.length === 0 ? (
                  <div className="text-center py-8">
                    <ArrowRightLeft className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No swap requests yet
                    </h3>
                    <p className="text-muted-foreground">
                      When users want to swap with your items, they'll appear
                      here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {swapRequests.map((request) => (
                      <div
                        key={request.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          request.status === "accepted"
                            ? "bg-emerald-50 border-emerald-200"
                            : request.status === "declined"
                              ? "bg-red-50 border-red-200"
                              : "bg-white border-gray-200 hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          {/* Requester Info */}
                          <img
                            src={request.requesterImage}
                            alt={request.requesterName}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1 space-y-3">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-foreground">
                                  {request.requesterName}
                                </h4>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  <span>{request.timestamp}</span>
                                </div>
                              </div>
                              {request.status === "pending" && (
                                <Badge
                                  variant="secondary"
                                  className="flex items-center space-x-1"
                                >
                                  <AlertCircle className="w-3 h-3" />
                                  <span>Pending</span>
                                </Badge>
                              )}
                              {request.status === "accepted" && (
                                <Badge className="bg-emerald text-white flex items-center space-x-1">
                                  <Check className="w-3 h-3" />
                                  <span>Accepted</span>
                                </Badge>
                              )}
                              {request.status === "declined" && (
                                <Badge
                                  variant="destructive"
                                  className="flex items-center space-x-1"
                                >
                                  <X className="w-3 h-3" />
                                  <span>Declined</span>
                                </Badge>
                              )}
                            </div>

                            {/* Swap Details */}
                            <div className="flex items-center space-x-6">
                              {/* Their item */}
                              <div className="flex items-center space-x-3">
                                <img
                                  src={request.offeredItem.image}
                                  alt={request.offeredItem.title}
                                  className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                  <p className="text-sm text-muted-foreground">
                                    They offer:
                                  </p>
                                  <p className="font-medium">
                                    {request.offeredItem.title}
                                  </p>
                                </div>
                              </div>

                              {/* Arrow */}
                              <ArrowRightLeft className="w-6 h-6 text-primary" />

                              {/* Your item */}
                              <div className="flex items-center space-x-3">
                                <img
                                  src={request.requestedItem.image}
                                  alt={request.requestedItem.title}
                                  className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                  <p className="text-sm text-muted-foreground">
                                    For your:
                                  </p>
                                  <p className="font-medium">
                                    {request.requestedItem.title}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Message */}
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-start space-x-2">
                                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                                <p className="text-sm text-foreground">
                                  {request.message}
                                </p>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            {request.status === "pending" && (
                              <div className="flex space-x-3 pt-2">
                                <Button
                                  onClick={() => handleAcceptSwap(request.id)}
                                  className="bg-emerald hover:bg-emerald/90 text-white flex items-center space-x-2"
                                >
                                  <Check className="w-4 h-4" />
                                  <span>Accept Swap</span>
                                </Button>
                                <Button
                                  onClick={() => handleDeclineSwap(request.id)}
                                  variant="outline"
                                  className="border-red-200 text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                >
                                  <X className="w-4 h-4" />
                                  <span>Decline</span>
                                </Button>
                                <Button
                                  variant="ghost"
                                  className="flex items-center space-x-2"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                  <span>Send Message</span>
                                </Button>
                              </div>
                            )}

                            {request.status === "accepted" && (
                              <div className="bg-emerald-50 p-3 rounded-lg">
                                <p className="text-sm text-emerald-700">
                                  ✅ Swap accepted! Contact details have been
                                  shared with both parties.
                                </p>
                              </div>
                            )}

                            {request.status === "declined" && (
                              <div className="bg-red-50 p-3 rounded-lg">
                                <p className="text-sm text-red-700">
                                  ❌ Swap declined. The other user has been
                                  notified.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* My Items */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Listed Items</CardTitle>
                  <CardDescription>
                    Items you've uploaded for swapping
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Vintage Denim Jacket",
                      image:
                        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop&crop=center",
                      status: "3 interested users",
                    },
                    {
                      id: 2,
                      title: "Designer Silk Blouse",
                      image:
                        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop&crop=center",
                      status: "2 interested users",
                    },
                    {
                      id: 3,
                      title: "Summer Floral Dress",
                      image:
                        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop&crop=center",
                      status: "5 interested users",
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 bg-sage-light/30 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Listed 2 days ago • {item.status}
                        </p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="ghost" size="sm">
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.8 Rating</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since</span>
                    <span>Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Swaps</span>
                    <span>45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saved CO₂</span>
                    <span className="text-emerald font-semibold">127 kg</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Swap completed",
                      time: "2 hours ago",
                      type: "success",
                    },
                    {
                      action: "New item listed",
                      time: "1 day ago",
                      type: "info",
                    },
                    {
                      action: "Swap request received",
                      time: "3 days ago",
                      type: "warning",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "success"
                            ? "bg-emerald"
                            : activity.type === "info"
                              ? "bg-primary"
                              : "bg-earth"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
