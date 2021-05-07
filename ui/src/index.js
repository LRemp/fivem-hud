///////////////////////////
///// Imports /////
///////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
import { EventListener } from './containers/Nui/NuiHandler';
import App from './containers/App/Main';
import './index.scss';

///////////////////////////
///// Store Stoof /////
///////////////////////////
export const store = createStore(reducer, {});

///////////////////////////
///// Main /////
///////////////////////////
ReactDOM.render(
	<Provider store={store}>
		<App />
		<EventListener />
	</Provider>,
	document.getElementById('root')
);
