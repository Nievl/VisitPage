import articles from "./fixtures.js";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const jsx = <img src="./js/react/react.svg" className="subtitle" />;

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: true
  //   };
  // }
  render() {
    const articleList = articles.map(item => {
      return (
        <div key={item.id} className="card-body">
          <div className="card-header">
            <h2>
              {item.title}
              {/* <button onClick={this.handleClick} className="btn btn-primary bt-lg">
                {this.state.isOpen ? "close" : "open"}                
              </button> */}
            </h2>
          </div>
          <div className="card-subtitle text-muted">
            Creation date:{item.date.toString()}
          </div>
          <div className="card-text">
            {/* {this.state.isOpen && item.text} */}
            {item.text}
            <form className="link" action={item.link}>
              <button className="btn btn-link btn-lg" type="submit">
                link
              </button>
            </form>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="">{articleList}</div>
        <footer>{jsx}</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// function handleClick() {
//   this.state
//   console.log("click");
// }
