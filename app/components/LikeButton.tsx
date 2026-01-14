'use client'; // WAJIB ada di baris pertama untuk komponen interaktif

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
    >
      ❤️ Suka: {likes}
    </button>
  );
}