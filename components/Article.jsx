import React from 'react';
import Link from 'next/link';

const Article = ({ article }) => {
  const { social_image, description, url, tag_list } = article;

  return (
    <Link href={url} passHref>
      <div className="shadow-md hover:translate-y-[-8px] transition-all duration-500 ease-in-out rounded-md overflow-hidden cursor-pointer flex flex-col">
        <img src={social_image} alt="article" className="object-cover " />

        <div className="bg-slate-100 flex-1 p-4 dark:bg-secondary-dark">
          <div className="flex items-center flex-wrap gap-2">
            {tag_list.map((tag) => (
              <span
                key={tag}
                className="bg-slate-200 px-2 rounded-md text-blue-900 font-semibold  lowercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-slate-600 mt-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
