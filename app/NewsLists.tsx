import { FC } from 'react';
import { NewsResponse } from '../types/News';
import Article from './Article';

type NewsListsProps = {
  news: NewsResponse;
};

const NewsLists: FC<NewsListsProps> = ({ news }) => {
  return (
    <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.data.map((item) => (
        <Article key={item.title} article={item} />
      ))}
    </main>
  );
};

export default NewsLists;
