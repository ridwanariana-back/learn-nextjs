import Image from 'next/image';

export default function TentangPage() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tentang Saya</h1>
      
      {/* Gunakan Image sebagai pengganti <img> */}
      <div className="relative h-64 w-full mb-6">
        <Image 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
          alt="Coding Laptop"
          fill // Membuat gambar memenuhi container
          className="rounded-2xl object-cover"
        />
      </div>

      <p className="text-gray-600">
        Saya adalah seorang pengembang web yang sedang mendalami ekosistem Next.js.
      </p>
    </div>
  );
}