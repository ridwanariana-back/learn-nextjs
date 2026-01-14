import Link from 'next/link';
import { notFound } from 'next/navigation';
import LikeButton from '@/app/components/LikeButton';

interface Post {
  title: string;
  body: string;
}

// Gunakan Promise untuk params
export default async function DetailBerita({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. WAJIB di-await agar datanya terbaca
  const { id } = await params; 

  // 2. Sekarang 'id' sudah ada nilainya, fetch akan berhasil
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  // Jika id tidak ditemukan di API
  if (!response.ok) {
    notFound();
  }

  const post: Post = await response.json();

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <Link href="/berita" className="mb-4 inline-block text-blue-600 hover:underline">
        ← Kembali
      </Link>
      <h1 className="text-4xl font-bold capitalize mb-4">{post.title}</h1>
      <hr className="mb-6 border-gray-300" />
      <p className="text-lg text-gray-700 leading-loose">{post.body}</p>
      <LikeButton postId={id} />  
    </div>
  );
}