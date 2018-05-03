import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ArticleList from './ArticleList';

function Footer () {
  return (
    <div className="footer">
      <img src="./js/react/react.svg" className="subtitle" />
      <div>
        Для генерации данной страницы были применены ReactJS, Webpack, Babel
      </div>
    </div>
  );
}
function Header () {
  return (
    <div>
      <header className="jumbotron">
        <h3 className="display-3">
          {' '}Добро пожаловать на мою тестовую страничку{' '}
        </h3>
        <div className="text">
          На данный момент я нахожусь в поиске вакансии на Frontend разработчика, JavaScript, ReactJS.
          {' '}
          Английским языком владею на уровне Intermediate.
        </div>
      </header>
    </div>
  );
}

function App () {
  return (
    <div className="container">
      <Header />
      <ArticleList />
      <Footer />
    </div>
  );
}

ReactDOM.render (<App />, document.getElementById ('root'));
