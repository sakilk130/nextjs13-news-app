import fetchNews from '../../../lib/fetchNews';
import { NewsResponse } from '../../../types/News';
import NewsLists from '../../NewsLists';

type NewsCategoryPageProps = {
  params: {
    category: string;
  };
};

const NewsCategoryPage = async ({
  params: { category },
}: NewsCategoryPageProps) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsLists news={news} />
    </div>
  );
};

export default NewsCategoryPage;
