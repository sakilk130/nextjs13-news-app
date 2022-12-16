'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?term=${search}`);
  };

  return (
    <form
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="flex-1 w-full h-10 p-1 text-gray-500 bg-transparent rounded-sm outline-none dark:text-orange-400"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        disabled={!search}
        className="text-orange-500 disabled:text-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
