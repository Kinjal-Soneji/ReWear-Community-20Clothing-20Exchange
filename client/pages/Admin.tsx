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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Recycle,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Users,
  Package,
  Flag,
} from "lucide-react";

export default function Admin() {
  const pendingItems = [
    {
      id: "ITM001",
      title: "Vintage Leather Jacket",
      user: "Emma K.",
      category: "Outerwear",
      submitted: "2 hours ago",
      status: "pending",
    },
    {
      id: "ITM002",
      title: "Designer Silk Scarf",
      user: "Maria S.",
      category: "Accessories",
      submitted: "4 hours ago",
      status: "pending",
    },
    {
      id: "ITM003",
      title: "Summer Floral Dress",
      user: "Lisa R.",
      category: "Dresses",
      submitted: "6 hours ago",
      status: "flagged",
    },
  ];

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
              <Badge className="bg-earth/10 text-earth border-earth/20">
                Admin Panel
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/admin" className="text-primary font-medium">
                Dashboard
              </a>
              <a
                href="/admin/items"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Items
              </a>
              <a
                href="/admin/users"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Users
              </a>
              <a
                href="/admin/reports"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Reports
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">← Back to Site</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage listings, moderate content, and oversee the ReWear community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-earth/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-earth" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pending Reviews
                  </p>
                  <p className="text-2xl font-bold text-earth">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Approved Today
                  </p>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-emerald">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Flag className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Flagged Items</p>
                  <p className="text-2xl font-bold text-destructive">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Items */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Items Pending Review</CardTitle>
                  <CardDescription>
                    Review and moderate newly submitted items
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search items..."
                      className="pl-9 w-64"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="flagged">Flagged</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-emerald-light rounded-lg"></div>
                            <div>
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.id}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.user}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.submitted}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.status === "flagged"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {item.status === "flagged" && (
                              <AlertTriangle className="w-3 h-3 mr-1" />
                            )}
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-emerald hover:text-emerald/80"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive/80"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="h-20 flex-col space-y-2" variant="outline">
                    <Package className="w-6 h-6" />
                    <span>Bulk Approve</span>
                  </Button>
                  <Button className="h-20 flex-col space-y-2" variant="outline">
                    <Users className="w-6 h-6" />
                    <span>User Reports</span>
                  </Button>
                  <Button className="h-20 flex-col space-y-2" variant="outline">
                    <Flag className="w-6 h-6" />
                    <span>Review Flags</span>
                  </Button>
                  <Button className="h-20 flex-col space-y-2" variant="outline">
                    <AlertTriangle className="w-6 h-6" />
                    <span>System Alerts</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Item approved",
                      details: "Vintage Denim Jacket by Sarah M.",
                      time: "5 minutes ago",
                      type: "success",
                    },
                    {
                      action: "User reported",
                      details: "Inappropriate listing content",
                      time: "15 minutes ago",
                      type: "warning",
                    },
                    {
                      action: "Item rejected",
                      details: "Poor quality photos",
                      time: "1 hour ago",
                      type: "error",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === "success"
                            ? "bg-emerald"
                            : activity.type === "warning"
                              ? "bg-earth"
                              : "bg-destructive"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.details}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Moderation Guidelines */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Moderation Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-emerald-light/30 rounded-lg">
                  <h4 className="font-semibold text-sm text-emerald-dark">
                    ✓ Approve When
                  </h4>
                  <ul className="text-xs text-emerald-dark mt-1 space-y-1">
                    <li>• Clear, high-quality photos</li>
                    <li>• Accurate item description</li>
                    <li>• Appropriate clothing items</li>
                  </ul>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <h4 className="font-semibold text-sm text-destructive">
                    ✗ Reject When
                  </h4>
                  <ul className="text-xs text-destructive mt-1 space-y-1">
                    <li>• Blurry or misleading photos</li>
                    <li>• Inappropriate content</li>
                    <li>• Counterfeit items</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
