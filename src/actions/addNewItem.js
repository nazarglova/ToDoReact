export default (items, itemValue) => {
	let {itemsList, maxItems} = items;
	let itemsListLength = itemsList.length;

	if (itemsListLength >= maxItems) {
		for (let i = 0; i < itemsListLength; i++) {
			if (!itemsList[i].hold) {
				itemsList.splice(i, 1);
				break;
			}
		}
	}
	itemsList.push({
		id: Math.random(),
		value: itemValue,
		quantity: 1,
		hold: false,
	});
	items.allListAreHold = false;
	return {
		type: 'ADD_NEW_ITEM',
		payload: items
	}
};