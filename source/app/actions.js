export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const updateMessage = ( message, meta = {} ) => ({
	type: UPDATE_MESSAGE,
	payload: {
		message
	},
	meta
});
