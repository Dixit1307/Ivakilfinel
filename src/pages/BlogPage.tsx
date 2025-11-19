import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Legal Rights in Property Disputes",
    excerpt: "A comprehensive guide to navigating property disputes in India, including key legal rights and remedies available to property owners.",
    category: "Property Law",
    date: "November 1, 2025",
    author: "Adv. Priya Sharma",
    image: "https://images.unsplash.com/photo-1701790644702-292e25180524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NjI0NDg5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "GST Compliance: Essential Tips for Small Businesses",
    excerpt: "Everything you need to know about GST registration, filing, and compliance to keep your business running smoothly.",
    category: "Corporate Law",
    date: "October 28, 2025",
    author: "Adv. Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjIzOTk5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Divorce Proceedings in India: What You Should Know",
    excerpt: "An in-depth look at divorce laws, procedures, and your rights during the separation process.",
    category: "Family Law",
    date: "October 25, 2025",
    author: "Adv. Ananya Desai",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzc4Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "How to Register a Trademark for Your Brand",
    excerpt: "Step-by-step guide to trademark registration in India, including costs, timeline, and common mistakes to avoid.",
    category: "Corporate Law",
    date: "October 20, 2025",
    author: "Adv. Vikram Patel",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzc4Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Consumer Rights: When and How to File a Complaint",
    excerpt: "Learn about your consumer rights and the process of filing complaints in consumer courts across India.",
    category: "Civil Law",
    date: "October 15, 2025",
    author: "Adv. Priya Sharma",
    image: "https://images.unsplash.com/photo-1701790644702-292e25180524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGJvb2tzJTIwbGlicmFyeXxlbnwxfHx8fDE3NjI0NDg5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Employment Contracts: Key Clauses You Must Know",
    excerpt: "Understanding the essential clauses in employment contracts and how to protect your interests as an employee or employer.",
    category: "Labour Law",
    date: "October 10, 2025",
    author: "Adv. Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjIzOTk5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read"
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Legal Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed with the latest legal news, guides, and expert advice from our team of experienced lawyers.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-indigo-600 mb-4">Featured Article</Badge>
          </div>
          <Card className="border-2 border-indigo-200 overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="bg-indigo-100 text-indigo-700 w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-fit">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all border-2 hover:border-indigo-200 overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="bg-indigo-100 text-indigo-700 w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date.split(',')[0]}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Corporate Law",
              "Property Law",
              "Family Law",
              "Criminal Law",
              "Civil Law",
              "Labour Law",
              "Compliance",
              "Legal Tips"
            ].map((category, index) => (
              <button
                key={index}
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all text-gray-700 hover:text-indigo-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get the latest legal insights and updates delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white h-12 flex-1"
            />
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 h-12">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
