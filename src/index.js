import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import promise from 'redux-promise-middleware'
import { Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import App from './App';
import CreateContact from './containers/CreateContact/CreateContact';
import ContactList from './containers/ContactList/ContactList';
import Header from './components/header'
import EditContact from './containers/EditContact/EditContact';
import ContactDetails from './containers/ContactDetails/ContactDetails';
const store = createStore(rootReducer, {}, applyMiddleware(thunk, promise()));
const customHistory = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router  history={customHistory}>
            <div>
                <Header />
                
                <Route path="/create" component={CreateContact} />
                <Route path="/list" component={ContactList} />
                <Route path="/contact/:id" component={ContactDetails} />
                <Route path="/edit/:id" component={EditContact} />
                <Route path="/" component={App}/>
            </div>
        </Router>
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();
