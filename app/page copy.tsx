import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Clock, Calendar } from "lucide-react";

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-300 px-4 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/logo-berita2.png"
                alt="Profile"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-lg">
              Indonesia News Station
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/articles" className="hover:text-gray-900">
              Articles
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-900"
            >
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          <Button variant="ghost" size="icon">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Indonesia News Station
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tempat terbaik untuk mendapatkan berita terbaru seputar peristiwa, isu sosial, teknologi, dan berbagai hal penting yang terjadi di sekitar kita.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">HOT NEWS</h2>
          <Card className="overflow-hidden">
            <div className="relative w-full h-80 mb-8">
              <Image
                src="/images/kpk1.jpg"
                alt="Gambar ilustrasi KPK"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  News
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  May 27, 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />6 min ago
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Terbongkar! Darwin Sulistio Terima Suap demi Loloskan Peserta
                SNBT
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Dunia pendidikan Indonesia kembali tercoreng oleh tindakan tidak
                terpuji dari salah satu Panitia penting dalam proses penerimaan
                mahasiswa baru. Darwin Sulistio, pria berusia 47 tahun....
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-600 text-white">
                        RW
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">Roby Wardana</span>
                    <span className="text-muted-foreground text-sm">
                      Jurnalis Investigasi
                    </span>
                  </div>
                </div>
                <Link href="/articles/berita-korupsi-panitia-snpmb-2025">
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
              News (12)
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Edcuation (6)
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
            {/* Artikel 1 - Berita */}
<Card className="overflow-hidden">
  <div className="relative h-48">
    <Image
      src="/images/kasus-korupsi.jpg" // gambar dummy
      alt="Ilustrasi kasus korupsi"
      fill
      className="object-cover"
    />
  </div>
  <CardContent className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <Badge
        variant="secondary"
        className="bg-red-100 text-red-800"
      >
        Berita
      </Badge>
      <span className="text-sm text-gray-500">27 Mei 2025</span>
      <span className="text-sm text-gray-500">• 8 menit baca</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Skandal Korupsi SNPMB: Darwin Sulistio Terjerat Suap SNBT
    </h3>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback>RW</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">Roby Wardana</span>
      </div>
      <Button variant="ghost" size="sm">
        Baca →
      </Button>
    </div>
  </CardContent>
</Card>

{/* Artikel 2 - Edukasi */}
<Card className="overflow-hidden">
  <div className="relative h-48">
    <Image
      src="/images/panduan-snbt.jpg" // gambar dummy
      alt="Panduan SNBT"
      fill
      className="object-cover"
    />
  </div>
  <CardContent className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <Badge
        variant="secondary"
        className="bg-yellow-100 text-yellow-800"
      >
        Edukasi
      </Badge>
      <span className="text-sm text-gray-500">20 Mei 2025</span>
      <span className="text-sm text-gray-500">• 6 menit baca</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Panduan Lengkap SNBT: Tips dan Strategi Lolos Seleksi Nasional
    </h3>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">Hera Simatupang</span>
      </div>
      <Button variant="ghost" size="sm">
        Baca →
      </Button>
    </div>
  </CardContent>
</Card>

{/* Artikel 3 - Teknologi */}
<Card className="overflow-hidden">
  <div className="relative h-48">
    <Image
      src="/images/teknologi-edukasi.jpg" // gambar dummy
      alt="Teknologi dalam pendidikan"
      fill
      className="object-cover"
    />
  </div>
  <CardContent className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <Badge
        variant="secondary"
        className="bg-blue-100 text-blue-800"
      >
        Teknologi
      </Badge>
      <span className="text-sm text-gray-500">15 Mei 2025</span>
      <span className="text-sm text-gray-500">• 7 menit baca</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Transformasi Digital dalam Dunia Pendidikan: Peluang dan Tantangan
    </h3>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback>IR</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">Irwan Rahmat</span>
      </div>
      <Button variant="ghost" size="sm">
        Baca →
      </Button>
    </div>
  </CardContent>
</Card>

          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and insights delivered straight to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
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
              <p className="text-gray-400">
                Sharing stories and insights about technology, design, and
                innovation.
              </p>
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
  );
}
