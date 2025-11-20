import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function IPPremiumBlogPage() {
  const blogPosts = [
    {
      title: "Understanding Patent Filing Process in India",
      excerpt: "A comprehensive guide to navigating the patent filing process, from prior art search to grant.",
      image: "https://images.unsplash.com/photo-1758243907171-dbb3cc264ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI3MjkxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      category: "Patent Services"
    },
    {
      title: "IP Strategy for Startups: Building Value from Day One",
      excerpt: "How startups can leverage intellectual property as a strategic business asset from inception.",
      image: "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRydXN0fGVufDF8fHx8MTc2MjcwMDIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 5, 2025",
      readTime: "7 min read",
      author: "Rahul Mehta",
      category: "IP Strategy"
    },
    {
      title: "Trademark Protection: Beyond Registration",
      excerpt: "Understanding the full scope of trademark protection and enforcement strategies.",
      image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwxfHx8fDE3NjI3NDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Nov 1, 2025",
      readTime: "6 min read",
      author: "Anjali Desai",
      category: "Trademark"
    },
    {
      title: "Pharmaceutical Patents: Navigating Regulatory Challenges",
      excerpt: "Key considerations for pharmaceutical companies in patent strategy and portfolio management.",
      image: "https://images.unsplash.com/photo-1758243907171-dbb3cc264ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI3MjkxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Oct 28, 2025",
      readTime: "8 min read",
      author: "Dr. Rajesh Kumar",
      category: "Pharmaceuticals"
    },
    {
      title: "FTO Analysis: Avoiding Infringement Risks",
      excerpt: "How Freedom-to-Operate studies can prevent costly litigation and product delays.",
      image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwxfHx8fDE3NjI3NDg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Oct 25, 2025",
      readTime: "6 min read",
      author: "Vikram Singh",
      category: "Prior Art Search"
    },
    {
      title: "Design Registration in India: Quick Guide",
      excerpt: "Protecting the aesthetic elements of your products through design registration.",
      image: "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRydXN0fGVufDF8fHx8MTc2MjcwMDIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "Oct 22, 2025",
      readTime: "4 min read",
      author: "Meera Patel",
      category: "Design Registration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
            IP Insights & Resources
          </h1>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto">
            Expert guidance on intellectual property strategy, protection, and commercialization
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3 text-xl group-hover:text-red-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <button className="flex items-center gap-2 text-red-600 group-hover:gap-4 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-700 hover:bg-red-50 text-base px-10 py-6 h-auto"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
