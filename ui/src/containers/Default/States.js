///////////////////////////
///// State Values /////
///////////////////////////
const initialState = {
	isShowing: true,
};

///////////////////////////
///// Management /////
///////////////////////////
const Default = (state = initialState, data) => {
	switch (data.type) {
		case 'toggle':
			return {
				...state,
				isShowing: data.value,
			};
		default:
			return state;
	}
};

export default Default;
