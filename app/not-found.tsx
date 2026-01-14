import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-6xl font-bold text-gray-200">404</h2>
      <p className="text-xl text-gray-600 mt-4">Waduh! Halaman yang Anda cari tidak ada.</p>
      <Link 
        href="/" 
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}