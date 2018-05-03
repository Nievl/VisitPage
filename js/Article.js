import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Article extends Component {
  constructor (props) {
    super (props);
    this.state = {isOpen: true};
    this.showText = this.showText.bind (this);
  }
  showText () {
    this.setState (prevState => ({isOpen: !prevState.isOpen}));
  }
  render () {
    const {article} = this.props;
    return (
      <div className="card mx-auto">
        <section className="card-header">
          {article.title}
          <button onClick={this.showText} className="btn btn-primary btn-lg float-right">
            {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </section>
        <section className="card-text">
          Creation Date: {article.date}
        </section>
        <section className="card-body">
          <div className="card-text">
            {this.state.isOpen ? article.text : ''}
          </div>
          <div className="btn btn-lg float-left">
            <form action={article.link} className="card-link">
              <button className="" type={'submit'}>
                Link
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Article;
