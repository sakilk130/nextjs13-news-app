import data from '../data/data.json';
import NewsLists from './NewsLists';

async function HomePage() {
  const news = data;
  // : await fetchNews(categories.join(','));
  return (
    <div>
      <NewsLists news={news} />
    </div>
  );
}

export default HomePage;
