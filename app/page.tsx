import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-20 pb-10 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
          Bangun Web <span className="text-blue-600">Masa Depan</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Saya baru saja belajar Next.js 16 dan sekarang saya sudah paham cara kerja Layout dan Styling. Perjalanan baru saja dimulai!
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/tentang" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
            Mulai Belajar
          </Link>
          <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition">
            Lihat Dokumentasi
          </button>
        </div>
      </section>

      {/* Card Section sederhana */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-blue-600 font-bold mb-2">01. Cepat</div>
          <p className="text-gray-500 text-sm">Next.js menggunakan Turbopack untuk kecepatan maksimal.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-blue-600 font-bold mb-2">02. Modern</div>
          <p className="text-gray-500 text-sm">Menggunakan App Router dan Server Components terbaru.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-blue-600 font-bold mb-2">03. SEO Friendly</div>
          <p className="text-gray-500 text-sm">Mudah ditemukan oleh mesin pencari Google.</p>
        </div>
      </section>
    </div>
  );
}