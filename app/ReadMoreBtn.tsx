'use client';

import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { Article } from '../types/News';

type ReadMoreBtnProps = {
  article: Article;
};

const ReadMoreBtn: FC<ReadMoreBtnProps> = ({ article }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    const query = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const url = `/article?${query}`;
    router.push(url);
  }, [router, article]);

  return (
    <button
      className="p-2 bg-orange-400 rounded-md hover:bg-orange-500 dark:text-gray-900"
      type="button"
      onClick={handleClick}
    >
      Read More
    </button>
  );
};

export default ReadMoreBtn;
