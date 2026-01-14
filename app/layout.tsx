import Link from 'next/link';
import './globals.css';

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