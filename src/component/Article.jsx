import React, {PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    render(){
        const {article, isOpen} = this.props;
        const body = isOpen && <section className="card-text"> {article.text}</section>
        const Href = isOpen && <a href={article.href}>click</a>
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className = "card-header">
                    <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body ">
                    <h6 className="card-subtitle text-muted">creation data: {(new Date(article.date)).toDateString()}</h6>
                    {body} {Href}
                </div>
            </div>
        )
    }
}

export default Article

