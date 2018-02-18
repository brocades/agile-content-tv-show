import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}/>
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

registerServiceWorker();
