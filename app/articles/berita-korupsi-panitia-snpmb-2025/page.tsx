import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Share2, Bookmark, Clock, Calendar } from "lucide-react";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
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
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/articles" className="text-gray-900 font-medium">
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

      <article className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <Badge className="bg-blue-100 text-blue-800 mb-4">News</Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Terbongkar! Darwin Sulistio Terima Suap demi Loloskan Peserta SNBT
          </h1>

          <div className="flex flex-col gap-2 mb-6">
            <div className="text-sm text-gray-500">
              <strong>Indonesia News Station - </strong>05/27/2025, 7 mins ago
            </div>

            <div className="flex items-start gap-4 mt-3">
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
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-80 mb-8">
          <Image
            src="/images/kpk1.jpg"
            alt="Gambar ilustrasi KPK"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            <strong>Jakarta, Mei 2025</strong> — Dunia pendidikan Indonesia
            kembali tercoreng oleh tindakan tidak terpuji dari salah satu
            Panitia penting dalam proses penerimaan mahasiswa baru. Darwin
            Sulistio, pria berusia 47 tahun kelahiran Malang, 29 April 1978,
            yang menjabat sebagai pengurus Seleksi Nasional Penerimaan Mahasiswa
            Baru (SNPMB) jalur Seleksi Nasional Berdasarkan Tes (SNBT), resmi
            dinyatakan bersalah oleh pengadilan atas kasus suap yang melibatkan
            pelaksanaan seleksi SNBT tahun ini.
          </p>

          <p className=" text-xl text-xl text-gray-700 mb-6 leading-relaxed">
            Dalam putusan yang dibacakan awal Mei 2025, Darwin terbukti menerima
            sejumlah uang dari orang tua calon mahasiswa sebagai imbalan untuk
            "mengatur kelulusan" peserta tertentu dalam ujian SNBT. Modus yang
            digunakan Darwin adalah dengan memanipulasi hasil tes serta mengatur
            kuota penerimaan agar peserta yang menyuap dapat diterima di
            perguruan tinggi negeri favorit.
          </p>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Penyidikan yang dilakukan Komisi Pemberantasan Korupsi (KPK)
            menunjukkan bahwa Darwin menerima suap dalam bentuk transfer dana
            dan pemberian tunai dengan nilai total ratusan juta rupiah. Uang
            tersebut berasal dari setidaknya lima orang tua peserta SNBT yang
            ingin memastikan anak-anak mereka diterima di universitas negeri
            terkemuka, termasuk Universitas Indonesia (UI), Universitas Gadjah
            Mada (UGM), dan Institut Teknologi Bandung (ITB).
          </p>

          <p className="text-blue-800 font-semibold mt-3 mb-3">
            Baca juga:{" "}
            <Link
              href="/articles/penganiayaan-tni-al-arjosari"
              className="underline hover:text-blue-900"
            >
              Polisi Kejar 2 Buron Penganiaya Perwira TNI AL di Terminal
              Arjosari Malang
            </Link>
          </p>

          <blockquote className="border-l-4 border-red-500 pl-6 py-4 my-8 bg-red-50 rounded-r-lg">
            <p className="text-gray-700 italic text-lg">
              "Ini adalah bentuk pengkhianatan terhadap prinsip keadilan dalam
              pendidikan. Proses seleksi nasional seharusnya menjamin kesempatan
              yang setara bagi semua peserta," ujar juru bicara KPK dalam
              konferensi pers.
            </p>
          </blockquote>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Kasus ini memicu reaksi keras dari masyarakat, khususnya para siswa
            dan orang tua yang mengikuti proses seleksi secara jujur. Banyak
            yang mengungkapkan kekecewaan dan menuntut perbaikan sistem
            pengawasan dalam pelaksanaan SNPMB ke depan.
          </p>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Darwin Sulistio saat ini ditahan dan dijatuhi hukuman penjara selama
            7 tahun serta denda Rp500 juta subsider 6 bulan kurungan. Selain
            itu, ia juga diwajibkan mengembalikan seluruh uang suap yang
            diterimanya kepada negara.
          </p>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            (Kemendikbudristek) menyatakan akan melakukan evaluasi menyeluruh
            terhadap sistem SNPMB, serta memperkuat transparansi dan
            akuntabilitas agar kejadian serupa tidak terulang.
          </p>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Kasus ini menjadi peringatan keras bahwa integritas dalam dunia
            pendidikan adalah harga mati, dan segala bentuk manipulasi demi
            kepentingan pribadi harus ditindak tegas.
          </p>

          <p className="text-gray-500 text-sm mb-4">
            Artikel ini ditulis oleh Roby Wardana, jurnalis senior di Indonesia
            News Station. Untuk informasi lebih lanjut, kunjungi{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Indonesia News Station
            </Link>
            .
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            #BeritaTerkini
          </span>
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            #KorupsiKPK
          </span>
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            #Pendidikan
          </span>
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            #BeritaKorupsi
          </span>
          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
            #HotNews
          </span>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
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
            <p>&copy; 2023 Indonesia News Station. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
