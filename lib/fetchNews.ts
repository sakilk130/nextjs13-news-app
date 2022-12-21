import { gql } from 'graphql-request';
import { Category } from '../types/Category';
import { NewsResponse } from '../types/News';
import sortNewsByImage from '../utils/sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
): Promise<NewsResponse> => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us,gb,vn "
        sort: "published_desc"
        keywords: $keywords
      ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
      }
    }
  `;

  const res = await fetch(
    'https://nashua.stepzen.net/api/veering-blackbird/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 10000 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.ACCESS_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return news;
};

export default fetchNews;
fetch;
