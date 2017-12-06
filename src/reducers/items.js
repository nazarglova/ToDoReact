const initialState = {
	itemsList: [
		{
			id: Math.random(),
			value: 'one',
			quantity: 1,
			hold: false,
		}
	],
	allListAreHold: false,
	canAddItem: true,
	maxItems: 3,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEW_ITEM":
			return Object.assign({}, state, action.payload);
		case "INCREASE":
			return Object.assign({}, state, {itemsList: action.payload});
		case "DECREASE":
			return Object.assign({}, state, {itemsList: action.payload});
		case "ITEM_HOLD_TOGGLE":
			return Object.assign({}, state, action.payload);
		case "DELETE_ITEM":
			return Object.assign({}, state, action.payload);
		case "REMOVE_ALL_ITEM":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}