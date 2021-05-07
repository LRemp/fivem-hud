///////////////////////////
///// State Values /////
///////////////////////////
const initialState = {
	isShowing: true,
	health: 100,
	armour: 100,
	hunger: 100,
	thirst: 100,
	drunkness: 100,
	voiceMode: 0,
	isTalking: false,

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
