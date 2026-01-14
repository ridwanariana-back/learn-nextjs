import Link from 'next/link';

// Struktur Data dari API (TypeScript)
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BeritaPage() {
  // 1. Mengambil data langsung di dalam fungsi (Async Component)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts: Post[] = await response.json();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Daftar Berita Terbaru</h1>
      
      <div className="grid gap-4">
        {posts.map((post) => (
  // Tambahkan key={post.id} di sini
  <Link href={`/berita/${post.id}`} key={post.id}> 
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition mb-4">
      <h2 className="text-xl font-semibold text-blue-600 capitalize cursor-pointer hover:underline">
        {post.title}
      </h2>
      <p className="text-gray-600 line-clamp-2">{post.body}</p>
    </div>
  </Link>
))}
      </div>
    </div>
  );
}