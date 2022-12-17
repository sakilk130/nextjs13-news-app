import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';

async function HomePage() {
  const news = await fetchNews(categories.join(','));
  return <div>news lists</div>;
}

export default HomePage;
