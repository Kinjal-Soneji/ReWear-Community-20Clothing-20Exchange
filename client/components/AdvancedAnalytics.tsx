import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingBag,
  Globe,
  Zap,
  Target,
  Award,
  Clock,
  Star,
} from "lucide-react";

// Simulated real-time analytics data
const useAdvancedAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    revenue: {
      current: 234567,
      growth: 15.3,
      trend: "up",
    },
    conversionRate: {
      current: 3.2,
      growth: 8.5,
      trend: "up",
    },
    avgSessionTime: {
      current: 12.5,
      growth: -2.1,
      trend: "down",
    },
    userRetention: {
      current: 78.9,
      growth: 5.7,
      trend: "up",
    },
    topCategories: [
      { name: "Vintage", value: 45, growth: 12 },
      { name: "Streetwear", value: 32, growth: 8 },
      { name: "Formal", value: 18, growth: -3 },
      { name: "Casual", value: 25, growth: 15 },
    ],
    realtimeUsers: {
      current: 847,
      peak: 1205,
      countries: [
        { country: "US", users: 245 },
        { country: "UK", users: 156 },
        { country: "CA", users: 98 },
        { country: "AU", users: 87 },
      ],
    },
    predictiveInsights: [
      {
        type: "demand",
        item: "Denim Jackets",
        prediction: "92% increase expected",
        confidence: 87,
        timeframe: "next 7 days",
      },
      {
        type: "trend",
        item: "Sustainable Brands",
        prediction: "Emerging trend detected",
        confidence: 94,
        timeframe: "next 30 days",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics((prev) => ({
        ...prev,
        realtimeUsers: {
          ...prev.realtimeUsers,
          current: Math.max(
            400,
            Math.min(
              1200,
              prev.realtimeUsers.current + Math.random() * 20 - 10,
            ),
          ),
        },
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return analytics;
};

export default function AdvancedAnalytics() {
  const analytics = useAdvancedAnalytics();

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">
                  ${analytics.revenue.current.toLocaleString()}
                </p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-green-500">
                    +{analytics.revenue.growth}%
                  </span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">
                  {analytics.conversionRate.current}%
                </p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-blue-500" />
                  <span className="text-blue-500">
                    +{analytics.conversionRate.growth}%
                  </span>
                </div>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Session Time</p>
                <p className="text-2xl font-bold">
                  {analytics.avgSessionTime.current}m
                </p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <span className="text-red-500">
                    {analytics.avgSessionTime.growth}%
                  </span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">User Retention</p>
                <p className="text-2xl font-bold">
                  {analytics.userRetention.current}%
                </p>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-orange-500" />
                  <span className="text-orange-500">
                    +{analytics.userRetention.growth}%
                  </span>
                </div>
              </div>
              <Award className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Users & Predictive Analytics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time Users</span>
              <Badge className="bg-green-100 text-green-700">
                {analytics.realtimeUsers.current} online
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Current vs Peak</span>
                  <span className="text-sm text-muted-foreground">
                    Peak: {analytics.realtimeUsers.peak}
                  </span>
                </div>
                <Progress
                  value={
                    (analytics.realtimeUsers.current /
                      analytics.realtimeUsers.peak) *
                    100
                  }
                  className="h-3"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Top Countries</h4>
                {analytics.realtimeUsers.countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{country.country}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {country.users} users
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>AI Predictive Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.predictiveInsights.map((insight, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{insight.item}</h4>
                      <p className="text-sm text-muted-foreground">
                        {insight.prediction}
                      </p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">
                      {insight.confidence}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {insight.timeframe}
                    </span>
                    <Progress value={insight.confidence} className="w-20 h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Category Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {analytics.topCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === 0
                        ? "bg-blue-500"
                        : index === 1
                          ? "bg-green-500"
                          : index === 2
                            ? "bg-yellow-500"
                            : "bg-purple-500"
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {category.value}% of total
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      category.growth > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {category.growth > 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{Math.abs(category.growth)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
