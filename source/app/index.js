
import 'whatwg-fetch';

// Shouldn't this be covered by jsx:true?  Or babel-preset-react?
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars

import App from './components/App'; // eslint-disable-line no-unused-vars

import { getStore } from './store';

let store = getStore();

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.querySelector( '.app-container' )
);
