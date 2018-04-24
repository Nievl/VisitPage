import articles from './fixtures.js';
import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <img src="./js/react/react.svg" className="subtitle" />;

class App extends React.Component {
  render() {
    const articleList = articles.map(item => {
      return (
      <div key={item.id} className="article">
          <div className="title">{item.title}</div>
          <div className="date">Creation date:{item.date.toString()}</div>
          <div className="text">
            {item.text}
            <form className="link" action={item.link}>
              <button type="submit">link</button>
            </form>
          </div>
      </div>
      );
    });
    return (
      <div>
        <div className="articleList">{articleList}</div>
        <footer>{jsx}</footer>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))
