export default (itemId, items) => {
	let {itemsList} = items;
	let itemsListLength = itemsList.length;
	let holdItemsLength = 0;

	for (let i = 0; i < itemsListLength; i++) {
		if (itemsList[i].id === itemId) {
			itemsList.splice(i, 1);
			break;
		}
	}
	itemsList.forEach(item => {
		if (item.hold) {
			holdItemsLength++;
			(holdItemsLength >= itemsList.length) && (items.allListAreHold = true);
		} else {
			(items.allListAreHold) && (items.allListAreHold = false);
		}
	});
	return {
		type: 'DELETE_ITEM',
		payload: items
	}
}