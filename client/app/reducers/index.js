import { combineReducers } from 'redux';
import * as actions from '../actions';

const initialMessage = "Hello world!";

function message( state = initialMessage, action ) {
	switch( action.type ) {
		case actions.UPDATE_MESSAGE: {
			return action.payload.message;
		}

		default: {
			return state;
		}
	}
}

export default combineReducers({
	message,
});
