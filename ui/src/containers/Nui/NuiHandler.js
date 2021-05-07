///////////////////////////
///// Register Event /////
///////////////////////////
let events = {};
export const Nui = {
	registerEmit: (type, func) => {
		events[type] = func;
	},
};

///////////////////////////
///// Nui Message /////
///////////////////////////
export const EventListener = () => {
	window.addEventListener('message', e => {
		if (!events[e.data.type]) return;
		events[e.data.type](e.data);
	});
	return null;
};
