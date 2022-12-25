import moment from 'moment';
import { FC } from 'react';
import { Article as ArticleType } from '../types/News';
import ReadMoreBtn from './ReadMoreBtn';

type ArticleProps = {
  article: ArticleType;
};

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <article className="flex flex-col transition-all duration-200 ease-out rounded-lg shadow-sm bg-slate-100 dark:bg-slate-800 hover:scale-110 hover:shadow-lg hover:bg-stone-200">
      {/* TODO: replace with next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image || '/noimage.jpg'}
        alt={article.title}
        className="object-cover w-full h-56 rounded-t-lg shadow-lg"
      />
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-col flex-1 p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>
          <footer className="flex pt-5 ml-auto space-x-1 text-xs italic text-right text-gray-400">
            <p>{article.source} -</p>
            <p>{moment(article.published_at).fromNow()}</p>
          </footer>
        </div>
        <ReadMoreBtn article={article} />
      </div>
    </article>
  );
};

export default Article;
