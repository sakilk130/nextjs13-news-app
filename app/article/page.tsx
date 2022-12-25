import moment from 'moment';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import { Article } from '../../types/News';

type ArticlePageProps = {
  searchParams?: Article;
};

const ArticlePage: FC<ArticlePageProps> = ({ searchParams }) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  return (
    <article>
      <section className="flex flex-col lg:flex-row">
        {article.image && (
          // TODO: replace with next/image
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="object-cover max-w-md mx-auto rounded-lg shadow-md h-50 md:max-w-lg lg:max-w-xl"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="px-0 pb-2 no-underline headerTitle">
            {article.title || 'Unknown '}
          </h1>
          <div className="flex space-x-4 divide-x-2">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="pl-4 font-bold">Source: {article.source}</h2>
            <p className="pl-4">{moment(article.published_at).fromNow()}</p>
          </div>
          <p>{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
