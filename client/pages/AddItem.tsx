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
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      setFormData((prev) => ({ ...prev, tags: updatedTags }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    setFormData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleImageSelect = (imageUrl: string) => {
    if (uploadedImages.length < 5 && !uploadedImages.includes(imageUrl)) {
      const updatedImages = [...uploadedImages, imageUrl];
      setUploadedImages(updatedImages);
      setFormData((prev) => ({ ...prev, images: updatedImages }));
    }
  };

  const removeImage = (imageUrl: string) => {
    const updatedImages = uploadedImages.filter((img) => img !== imageUrl);
    setUploadedImages(updatedImages);
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const updateFormData = (field: keyof ItemFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.category || uploadedImages.length === 0) {
      alert("Please fill in all required fields and add at least one image.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create new item
    const newItem = {
      id: Date.now(),
      ...formData,
      images: uploadedImages,
      tags,
      user: "You",
      dateAdded: new Date().toISOString(),
      status: "active",
      views: 0,
      interested: 0,
    };

    // Save to localStorage (in a real app, this would be an API call)
    const existingItems = JSON.parse(localStorage.getItem("userItems") || "[]");
    existingItems.push(newItem);
    localStorage.setItem("userItems", JSON.stringify(existingItems));

    setIsSubmitting(false);

    // Navigate back to dashboard
    navigate("/dashboard", {
      state: {
        message: "Item listed successfully!",
        newItem,
      },
    });
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
                  <Label className="text-base font-semibold">Photos *</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add up to 5 high-quality photos of your item (
                    {uploadedImages.length}/5)
                  </p>

                  {/* Uploaded Images */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={image}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg border-2 border-primary"
                        />
                        <button
                          onClick={() => removeImage(image)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}

                    {/* Add Photo Button */}
                    {uploadedImages.length < 5 && (
                      <div
                        onClick={() => setShowImageSelector(true)}
                        className="aspect-square border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        <div className="text-center">
                          <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                          <p className="text-sm text-primary font-medium">
                            Add Photo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Selector Modal */}
                  {showImageSelector && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold">
                            Select T-Shirt Photo
                          </h3>
                          <button
                            onClick={() => setShowImageSelector(false)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {sampleTshirtImages.map((image, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                handleImageSelect(image);
                                setShowImageSelector(false);
                              }}
                              className="aspect-square cursor-pointer hover:scale-105 transition-transform"
                            >
                              <img
                                src={image}
                                alt={`T-shirt ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-primary"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => updateFormData("title", e.target.value)}
                      placeholder="e.g., Vintage Denim Jacket"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        updateFormData("category", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tops">Tops</SelectItem>
                        <SelectItem value="Bottoms">Bottoms</SelectItem>
                        <SelectItem value="Dresses">Dresses</SelectItem>
                        <SelectItem value="Outerwear">Outerwear</SelectItem>
                        <SelectItem value="Shoes">Shoes</SelectItem>
                        <SelectItem value="Accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      updateFormData("description", e.target.value)
                    }
                    placeholder="Describe your item in detail - brand, material, styling tips, why you're letting it go..."
                    className="mt-1 min-h-24"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => updateFormData("type", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="T-Shirt">T-Shirt</SelectItem>
                        <SelectItem value="Shirt">Shirt</SelectItem>
                        <SelectItem value="Pants">Pants</SelectItem>
                        <SelectItem value="Dress">Dress</SelectItem>
                        <SelectItem value="Jacket">Jacket</SelectItem>
                        <SelectItem value="Boots">Boots</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Select
                      value={formData.size}
                      onValueChange={(value) => updateFormData("size", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="XS">XS</SelectItem>
                        <SelectItem value="S">S</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="L">L</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                        <SelectItem value="XXL">XXL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) =>
                        updateFormData("condition", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Like New">Like New</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Very Good">Very Good</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
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
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={formData.swapAllowed}
                      onChange={(e) =>
                        updateFormData("swapAllowed", e.target.checked)
                      }
                    />
                    <span>Allow direct swaps</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Let users request to swap their items for yours
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={formData.pointsAllowed}
                      onChange={(e) =>
                        updateFormData("pointsAllowed", e.target.checked)
                      }
                    />
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
                    value={formData.pointValue}
                    onChange={(e) =>
                      updateFormData(
                        "pointValue",
                        parseInt(e.target.value) || 0,
                      )
                    }
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
                  <div className="aspect-[3/4] bg-gradient-to-br from-emerald-light to-sage-light rounded-lg flex items-center justify-center overflow-hidden">
                    {uploadedImages.length > 0 ? (
                      <img
                        src={uploadedImages[0]}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground">Item Photo</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {formData.title || "Item Title"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.category || "Category"} • Size{" "}
                      {formData.size || "Size"}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="secondary">
                      {formData.condition || "Condition"}
                    </Badge>
                    <span className="font-semibold text-primary">
                      {formData.pointValue || 150} points
                    </span>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="space-y-3">
              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Listing Item...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    List Item
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
