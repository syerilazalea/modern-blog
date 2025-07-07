import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Clock, Calendar } from "lucide-react"

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-semibold text-lg">Blog</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/articles" className="text-gray-600 hover:text-gray-900">
              Articles
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Stories Worth Reading</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories about technology, design, and innovation from industry experts and
            thought leaders.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="relative h-80 md:h-96">
              <Image
                src="/images/hero-code.jpg"
                alt="Code on screen showing web development"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Technology
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Dec 15, 2023
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />6 min read
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                The Future of Web Development: Trends to Watch in 2024
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Explore the latest trends shaping the web development landscape, from AI integration to new frameworks
                and tools that are revolutionizing how we build applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/images/author-sarah.jpg" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-900">Sarah Johnson</span>
                </div>
                <Link href="/articles/future-of-web-development">
                  <Button variant="outline">Read More →</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Category Tags */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-blue-600 text-white px-4 py-2">All (24)</Badge>
            <Badge variant="outline" className="px-4 py-2">
              Technology (8)
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Design (6)
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Business (4)
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Lifestyle (3)
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Travel (3)
            </Badge>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/article-1.jpg" alt="Person typing on laptop" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Design
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 12, 2023</span>
                  <span className="text-sm text-gray-500">• 4 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Designing for Accessibility: A Complete Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to create inclusive digital experiences that work for everyone, with practical tips and best
                  practices for accessible design.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Michael Chen</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/article-1.jpg" alt="Laptop on desk with code" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Business
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 10, 2023</span>
                  <span className="text-sm text-gray-500">• 7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building Scalable SaaS Applications</h3>
                <p className="text-gray-600 mb-4">
                  Discover the architectural patterns and technologies that power successful SaaS platforms and how to
                  implement them in your projects.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Alex Rodriguez</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/article-1.jpg" alt="Code review session" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Technology
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 8, 2023</span>
                  <span className="text-sm text-gray-500">• 5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Art of Code Review: Best Practices</h3>
                <p className="text-gray-600 mb-4">
                  Master the essential skills of conducting effective code reviews that improve code quality and foster
                  team collaboration.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Emma Wilson</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/article-1.jpg" alt="Minimalist workspace" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Design
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 6, 2023</span>
                  <span className="text-sm text-gray-500">• 3 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Minimalist Design: Less is More</h3>
                <p className="text-gray-600 mb-4">
                  Explore the principles of minimalist design and how to apply them to create clean, focused user
                  interfaces that delight users.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">David Park</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/article-1.jpg" alt="Remote work setup" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Lifestyle
                  </Badge>
                  <span className="text-sm text-gray-500">Dec 4, 2023</span>
                  <span className="text-sm text-gray-500">• 6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Work: Productivity Tips and Tools</h3>
                <p className="text-gray-600 mb-4">
                  Optimize your productivity while working remotely with these proven strategies and essential tools for
                  distributed teams.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>LT</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Lisa Thompson</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="font-semibold text-lg">Blog</span>
              </div>
              <p className="text-gray-400">Sharing stories and insights about technology, design, and innovation.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/technology" className="hover:text-white">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/design" className="hover:text-white">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/lifestyle" className="hover:text-white">
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/twitter" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/linkedin" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/github" className="hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/rss" className="hover:text-white">
                    RSS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
