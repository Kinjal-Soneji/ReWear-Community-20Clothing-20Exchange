import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Recycle, Upload, X, Plus, Camera, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample t-shirt images for demo purposes
const sampleTshirtImages = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop&crop=center",
];

interface ItemFormData {
  title: string;
  category: string;
  description: string;
  type: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  swapAllowed: boolean;
  pointsAllowed: boolean;
  pointValue: number;
}

export default function AddItem() {
  const navigate = useNavigate();
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImageSelector, setShowImageSelector] = useState(false);

  const [formData, setFormData] = useState<ItemFormData>({
    title: "",
    category: "",
    description: "",
    type: "",
    size: "",
    condition: "",
    tags: [],
    images: [],
    swapAllowed: true,
    pointsAllowed: true,
    pointValue: 150,
  });

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
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
              <a href="/add-item" className="text-primary font-medium">
                List Item
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Back to Dashboard</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            List a New Item
          </h1>
          <p className="text-muted-foreground">
            Share your pre-loved fashion with the ReWear community. Every item
            you list helps reduce textile waste!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
                <CardDescription>
                  Provide accurate information to help other users find your
                  item
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Upload */}
                <div>
                  <Label className="text-base font-semibold">Photos</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload up to 5 high-quality photos of your item
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="aspect-square border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Upload Photo
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Vintage Denim Jacket"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tops">Tops</SelectItem>
                        <SelectItem value="bottoms">Bottoms</SelectItem>
                        <SelectItem value="dresses">Dresses</SelectItem>
                        <SelectItem value="outerwear">Outerwear</SelectItem>
                        <SelectItem value="shoes">Shoes</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your item in detail - brand, material, styling tips, why you're letting it go..."
                    className="mt-1 min-h-24"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shirt">Shirt</SelectItem>
                        <SelectItem value="pants">Pants</SelectItem>
                        <SelectItem value="dress">Dress</SelectItem>
                        <SelectItem value="jacket">Jacket</SelectItem>
                        <SelectItem value="boots">Boots</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                        <SelectItem value="xxl">XXL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <Label>Tags</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Add tags to help others discover your item
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="flex items-center space-x-1"
                      >
                        <span>{tag}</span>
                        <button onClick={() => removeTag(tag)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <Button onClick={addTag} variant="outline" size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Exchange Preferences */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Exchange Preferences</CardTitle>
                <CardDescription>
                  How would you like to exchange this item?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Allow direct swaps</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Let users request to swap their items for yours
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Accept points redemption</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to claim your item using points
                  </p>
                </div>

                <div>
                  <Label htmlFor="points">Point Value</Label>
                  <Input
                    id="points"
                    type="number"
                    placeholder="150"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Suggested: 120-180 points based on similar items
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                  How your item will appear to other users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-emerald-light to-sage-light rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Item Photo</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Item Title</h4>
                    <p className="text-sm text-muted-foreground">
                      Category • Size
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="secondary">Condition</Badge>
                    <span className="font-semibold text-primary">
                      150 points
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                List Item
              </Button>
              <Button variant="outline" className="w-full">
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
