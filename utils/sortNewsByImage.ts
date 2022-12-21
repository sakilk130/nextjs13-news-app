import { NewsResponse } from '../types/News';

const sortNewsByImage = (news: NewsResponse): NewsResponse => {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponse;
};

export default sortNewsByImage;
