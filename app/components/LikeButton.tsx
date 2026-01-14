'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function LikeButton({ postId }: { postId: string }) {
  const [likes, setLikes] = useState(0);

  // 1. Ambil data like dari database saat halaman dibuka
  useEffect(() => {
    async function fetchLikes() {
      const { data } = await supabase
        .from('posts_likes')
        .select('count')
        .eq('post_id', postId)
        .single();
      
      if (data) setLikes(data.count);
    }
    fetchLikes();
  }, [postId]);

  // 2. Fungsi untuk menambah like di database
  const handleLike = async () => {
    const newCount = likes + 1;
    setLikes(newCount); // Update di layar dulu (biar cepat)

    // Simpan ke database (Upsert: Update jika ada, Insert jika belum ada)
    await supabase
      .from('posts_likes')
      .upsert({ post_id: postId, count: newCount });
  };

  return (
    <button 
      onClick={handleLike}
      className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-md"
    >
      ❤️ Suka: {likes}
    </button>
  );
}