export default (items) => {
	items.itemsList = items.itemsList.filter(item => item.hold);
	items.allListAreHold = true;
	return {
		type: 'REMOVE_ALL_ITEM',
		payload: items
	}
};