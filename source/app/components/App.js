import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';

const App = ( props ) => {
	return (
		<div className="container">
			<h1>{ props.message }</h1>
			<MessageForm />
		</div>
	);
};

App.propTypes = {
	message: React.PropTypes.string.isRequired
};

// NOTE: In a larger app you would (usually!) create separate connected components from
// the normal layout components, but it's not always immediately clear when to do that,
// so starting out in the same file like this is reasonable.

const mapState = state => ({
	message: state.message
});

const mapDispatch = () => ({});

const CurrentApp = connect( mapState, mapDispatch )( App );

export default CurrentApp;
