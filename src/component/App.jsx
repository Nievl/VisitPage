import React, {PureComponent} from 'react';
import articles from './fixtures.jsx';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends PureComponent {
    render() {
        return(
            <div className = 'container'>
                <div className="jumbotron">
                    <h1 className="display-5">
                        Добро пожаловать на мою тестовую страничку
                    </h1>
                    <p> На данный момент я нахожусь в поиске вакансии на full-stack разработчика, JavaScript, NodeJS.</p>
                </div>

                <ArticleList articles = {articles}/>
            </div>
        )
    }
}

export default App