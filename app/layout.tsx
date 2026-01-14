import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Portal Berita Saya | Belajar Next.js',
  description: 'Website berita modern yang dibangun dengan Next.js 16 dan Tailwind CSS',
  openGraph: {
    title: 'Portal Berita Saya',
    description: 'Belajar membuat web modern dari nol sampai online!',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97'], // Gambar yang muncul di sosmed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* --- NAVBAR START --- */}
        <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-b">
          <div className="font-bold text-xl text-blue-600">MyLogo</div>
          <div className="space-x-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/tentang" className="hover:text-blue-600">Tentang</Link>
          <Link href="/berita" className="hover:text-blue-600">Berita</Link>
          </div>
        </nav>
        {/* --- NAVBAR END --- */}

        {/* Ini adalah tempat konten halaman (page.tsx) akan muncul */}
        <main>{children}</main>
      </body>
    </html>
  );
}