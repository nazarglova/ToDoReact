export default (itemId, items) => {
	let {itemsList, maxItems} = items;
	let itemsListLength = itemsList.length;
	let holdItemsLength = 0;

	for (let i = 0; i < itemsListLength; i++) {
		if (itemsList[i].id === itemId) {
			itemsList[i].hold = !itemsList[i].hold;
			break;
		}
	}
	itemsList.forEach(item => {
		if (item.hold) {
			holdItemsLength++;
			(holdItemsLength >= itemsListLength) && (items.allListAreHold = true);
		} else {
			(items.allListAreHold) && (items.allListAreHold = false);
		}
	});
	items.canAddItem = holdItemsLength < maxItems;
	return {
		type: 'ITEM_HOLD_TOGGLE',
		payload: items
	}
}