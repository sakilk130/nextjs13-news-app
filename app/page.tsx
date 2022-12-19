import { categories } from '../constants';
import data from '../data/data.json';
import fetchNews from '../lib/fetchNews';
import NewsLists from './NewsLists';

async function HomePage() {
  const news =
    process.env.NODE_ENV === 'development'
      ? data
      : await fetchNews(categories.join(','));
  return (
    <div>
      <NewsLists news={news} />
    </div>
  );
}

export default HomePage;
