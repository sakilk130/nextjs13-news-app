import fetchNews from '../../lib/fetchNews';
import { NewsResponse } from '../../types/News';
import NewsLists from '../NewsLists';

type SearchPageProps = {
  searchParams?: { term: string };
};
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term || '',
    true
  );
  return (
    <div>
      <h1 className="headerTitle">
        Search Results for: {searchParams?.term || 'Unknown'}
      </h1>
      <NewsLists news={news} />
    </div>
  );
};

export default SearchPage;
