
import 'whatwg-fetch';

// Shouldn't this be covered by jsx:true?  Or babel-preset-react?
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { getStore } from './store';

let store = getStore();

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.querySelector( '.app-container' )
);
