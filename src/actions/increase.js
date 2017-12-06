export default (itemId, itemsList, step = 1) => {
	let itemsListLength = itemsList.length;
	for (let i = 0; i < itemsListLength; i++) {
		if (itemsList[i].id === itemId) {
			itemsList[i].quantity += step;
			break;
		}
	}
	return {
		type: 'INCREASE',
		payload: itemsList
	}
};