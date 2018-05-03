import rawArticles from './rawArticles.js';
import React from 'react';
import Article from './Article';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function ArticleList () {
  const articleElements = rawArticles.map (function (item, index) {
    return (
      <li key={item.id} className="article">
        <Article article={item} />
      </li>
    );
  });
  return (
    <ul>
      {articleElements}
    </ul>
  );
}
export default ArticleList;
