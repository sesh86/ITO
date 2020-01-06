import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateCourse from './Components/CreateCourse';
import CreateBlog from './Components/CreateBlog';
import CreateDiscussion from './Components/CreateDiscussion';
import Blog from './Components/Blog';
import BlogList from './Components/BlogList';
import Discussions from './Components/Discussions';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducer/reducer'
import Discussion from './Components/Discussion';
import Header from './Components/Header';
import Home from './Components/Home';
import Course from './Components/Course';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
<Header></Header>        
<BrowserRouter>
<Switch>
<Route exact path="/" component={Home}/>    
<Route exact path="/CreateCourse" component={CreateCourse}/>
<Route exact path="/Course/:course" component={Course}/>
<Route exact path="/CreateBlog" component={CreateBlog}/>
<Route exact path="/CreateDiscussion" component={CreateDiscussion}/>
<Route exact path="/Blog/:title" component={Blog}/>
<Route exact path="/Discussion/:title" component={Discussion}/>
<Route exact path="/BlogList" component={BlogList}/>
<Route exact path="/BlogList/:page" component={BlogList}/>
<Route exact path="/Discussions/:page" component={Discussions}/>

</Switch>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
