import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ArticleIndex from './article/ArticleIndex'
import ArticleCreate from './article/ArticleCreate'
import ArticleShow from './article/ArticleShow'
import ArticleEdit from './article/ArticleEdit'
import home from './home'
import StudentIndex from './student/StudentIndex'
import StudentCreate from './student/StudentCreate'
import StudentEdit from './student/StudentEdit'
import StudentShow from './student/StudentShow'

import {Container, Row, Col} from 'react-bootstrap';

 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                            <Switch>
                            <Route exact path='/home' component={home}/>
                            <Route exact path='/' component={ArticleIndex}/>
                            <Route exact path='/create' component={ArticleCreate} />
                            <Route path='/article/edit/:id' component={ArticleEdit} />
                            <Route path='/article/:id' component={ArticleShow} />
                            <Route path='/student' component={StudentIndex} />
                            <Route exact path='/studentcr' component={StudentCreate} />
                            <Route path='/student1/edit/:id' component={StudentEdit} />
                            <Route path='/student1/:id' component={StudentShow} />
                            </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))