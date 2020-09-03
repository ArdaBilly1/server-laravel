import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ArticleIndex from './ArticleIndex'
import ArticleCreate from './ArticleCreate'
import ArticleShow from './ArticleShow'
import ArticleEdit from './ArticleEdit'
import home from './home'
 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    
                    <Switch>
                    <Route exact path='/' component={ArticleIndex}/>
                    <Route exact path='/create' component={ArticleCreate} />
                    <Route path='/article/edit/:id' component={ArticleEdit} />
                    <Route path='/article/:id' component={ArticleShow} />
                    <Route exact path='/home' component={home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))