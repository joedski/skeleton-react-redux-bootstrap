import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions';

const App = ( props ) => {
	return (
		<div className="container">
			<h1>{ props.message }</h1>
		</div>
	);
};

App.propTypes = React.PropTypes({
	message: React.PropTypes.string.isRequired
});

// Many times you may want your actual connect()ed components in separate modules.

const mapState = state => ({
	message: state.message
});

const mapDispatch = () => ({});

const CurrentApp = connect( mapState, mapDispatch )( App );

export default CurrentApp;
