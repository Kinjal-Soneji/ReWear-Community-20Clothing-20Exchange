import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdvancedAnalytics from "@/components/AdvancedAnalytics";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Recycle,
  Users,
  TrendingUp,
  AlertTriangle,
  Shield,
  Zap,
  Brain,
  Eye,
  Bell,
  Search,
  Filter,
  Download,
  Settings,
  Moon,
  Sun,
  Activity,
  DollarSign,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Globe,
  Smartphone,
  Monitor,
  MessageSquare,
  UserCheck,
  UserX,
  Trash2,
  Edit,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Calendar,
  MapPin,
  Target,
  Sparkles,
} from "lucide-react";

// Real-time data simulation
const useRealTimeData = () => {
  const [data, setData] = useState({
    totalUsers: 12547,
    activeUsers: 8234,
    totalItems: 45678,
    totalSwaps: 23456,
    revenue: 234567,
    fraudAlerts: 12,
    systemHealth: 98.5,
    serverLoad: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        totalSwaps: prev.totalSwaps + Math.floor(Math.random() * 5),
        serverLoad: Math.max(
          20,
          Math.min(80, prev.serverLoad + Math.random() * 10 - 5),
        ),
        systemHealth: Math.max(
          90,
          Math.min(100, prev.systemHealth + Math.random() * 2 - 1),
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

// AI Insights data
const aiInsights = [
  {
    type: "trend",
    title: "Vintage Items Trending Up 🔥",
    description: "85% increase in vintage clothing swaps this week",
    confidence: 94,
    action: "Promote vintage categories",
  },
  {
    type: "fraud",
    title: "Suspicious Activity Detected ⚠️",
    description: "User @FakeProfile123 showing fraud patterns",
    confidence: 87,
    action: "Investigate account",
  },
  {
    type: "optimization",
    title: "Peak Hours Identified ⏰",
    description: "Most swaps happen between 7-9 PM",
    confidence: 92,
    action: "Schedule maintenance accordingly",
  },
];

// Recent activities
const recentActivities = [
  {
    user: "Sarah Chen",
    action: "Listed vintage jacket",
    time: "2 min ago",
    type: "item",
  },
  {
    user: "Mike Johnson",
    action: "Completed swap #12845",
    time: "5 min ago",
    type: "swap",
  },
  {
    user: "AI System",
    action: "Flagged suspicious user",
    time: "8 min ago",
    type: "alert",
  },
  {
    user: "Emma Wilson",
    action: "Joined ReWear",
    time: "12 min ago",
    type: "user",
  },
  {
    user: "Auto Moderator",
    action: "Approved 15 items",
    time: "15 min ago",
    type: "moderation",
  },
];

// User analytics data
const userAnalytics = {
  demographics: [
    { age: "18-25", count: 3456, percentage: 28 },
    { age: "26-35", count: 4234, percentage: 34 },
    { age: "36-45", count: 2890, percentage: 23 },
    { age: "46+", count: 1967, percentage: 15 },
  ],
  devices: [
    { type: "Mobile", count: 8456, percentage: 67 },
    { type: "Desktop", count: 3234, percentage: 26 },
    { type: "Tablet", count: 890, percentage: 7 },
  ],
  locations: [
    { country: "United States", users: 4567 },
    { country: "United Kingdom", users: 2345 },
    { country: "Canada", users: 1890 },
    { country: "Australia", users: 1456 },
    { country: "Germany", users: 1234 },
  ],
};

export default function AdminPanel() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");
  const [refreshing, setRefreshing] = useState(false);
  const realTimeData = useRealTimeData();

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50"}`}
    >
      {/* Header */}
      <header className="border-b bg-white/95 dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-primary">ReWear</span>
              </Link>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                🚀 Admin Panel
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center space-x-2"
              >
                <RefreshCw
                  className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                />
                <span>Refresh</span>
              </Button>

              <Select
                value={selectedTimeRange}
                onValueChange={setSelectedTimeRange}
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">1D</SelectItem>
                  <SelectItem value="7d">7D</SelectItem>
                  <SelectItem value="30d">30D</SelectItem>
                  <SelectItem value="90d">90D</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="w-4 h-4" />
              </div>

              <Button className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              <Avatar>
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI-Powered Insights Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-bold">AI-Powered Insights</h2>
                <p className="text-purple-100">
                  Real-time intelligence for better decisions
                </p>
              </div>
            </div>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Real-Time Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">
                    {realTimeData.totalUsers.toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-1 text-sm">
                    <ArrowUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-500">+12.5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Activity className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Active Now</p>
                  <p className="text-2xl font-bold">
                    {realTimeData.activeUsers.toLocaleString()}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(realTimeData.activeUsers / realTimeData.totalUsers) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <ShoppingBag className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Total Swaps</p>
                  <p className="text-2xl font-bold">
                    {realTimeData.totalSwaps.toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-1 text-sm">
                    <ArrowUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-500">+8.3%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Fraud Alerts</p>
                  <p className="text-2xl font-bold">
                    {realTimeData.fraudAlerts}
                  </p>
                  <Badge variant="destructive" className="text-xs mt-1">
                    Needs Attention
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Real-Time Activity Feed */}
              <Card className="lg:col-span-2 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Real-Time Activity</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {activity.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>{" "}
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        <Badge
                          variant={
                            activity.type === "alert"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>System Health</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Overall Health
                      </span>
                      <span className="text-sm text-green-600">
                        {realTimeData.systemHealth}%
                      </span>
                    </div>
                    <Progress
                      value={realTimeData.systemHealth}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Server Load</span>
                      <span className="text-sm text-blue-600">
                        {realTimeData.serverLoad}%
                      </span>
                    </div>
                    <Progress value={realTimeData.serverLoad} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-1" />
                      <p className="text-xs text-green-600">API Healthy</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-1" />
                      <p className="text-xs text-green-600">DB Connected</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="ai-insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {aiInsights.map((insight, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{insight.title}</span>
                      <Badge className="bg-purple-100 text-purple-700">
                        {insight.confidence}% confidence
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {insight.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Progress
                        value={insight.confidence}
                        className="flex-1 mr-4"
                      />
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-blue-500"
                      >
                        {insight.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <AdvancedAnalytics />

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Demographics */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userAnalytics.demographics.map((demo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{demo.age}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${demo.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">
                            {demo.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Device Usage */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userAnalytics.devices.map((device, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {device.type === "Mobile" && (
                          <Smartphone className="w-5 h-5 text-blue-500" />
                        )}
                        {device.type === "Desktop" && (
                          <Monitor className="w-5 h-5 text-green-500" />
                        )}
                        {device.type === "Tablet" && (
                          <Smartphone className="w-5 h-5 text-purple-500" />
                        )}
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {device.type}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {device.count.toLocaleString()}
                            </span>
                          </div>
                          <Progress
                            value={device.percentage}
                            className="h-2 mt-1"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <div className="flex space-x-2">
                  <Input placeholder="Search users..." className="max-w-sm" />
                  <Button variant="outline">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah Chen",
                      email: "sarah@example.com",
                      status: "active",
                      swaps: 15,
                      joined: "2024-01-15",
                    },
                    {
                      name: "Mike Johnson",
                      email: "mike@example.com",
                      status: "suspended",
                      swaps: 8,
                      joined: "2024-02-01",
                    },
                    {
                      name: "Emma Wilson",
                      email: "emma@example.com",
                      status: "active",
                      swaps: 23,
                      joined: "2024-01-10",
                    },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          variant={
                            user.status === "active" ? "default" : "destructive"
                          }
                        >
                          {user.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {user.swaps} swaps
                        </span>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-500"
                          >
                            <UserX className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Maintenance Mode</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Auto Moderation</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Real-time Notifications</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>AI Fraud Detection</span>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export User Data
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Clear Cache
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Scan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
