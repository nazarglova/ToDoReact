import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from './Field';
import ListGroup from './ListGroup';
import Button from './Button';
class ToDoApp extends React.Component {
	constructor(props) {
		super();
		this.state = {
			items: [],
			allListAreHold: false,
			canAddItem: true,
		};
		this.maxItems = 5;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let itemValue = event.target.newList.value;
		this.addItem(itemValue);
		event.target.reset();
	};

	addItem = (itemValue) => {
		let items = this.state.items;
		let itemsLength = items.length;
		if (itemsLength >= this.maxItems) {
			for (let i = 0; i < itemsLength; i++) {
				if (!items[i].hold) {
					items.splice(i, 1);
					break;
				}
			}
		}
		items.push({
			id: Math.random(),
			value: itemValue,
			hold: false,
		});
		this.setState({items: items});
		this.allListAreHoldAndCanAddItem();
	};

	holdItemToggle = (itemId, e) => {
		let items = this.state.items;
		let itemsLength = items.length;
		for (let i = 0; i < itemsLength; i++) {
			if (items[i].id === itemId) {
				items[i].hold = !items[i].hold;
				this.setState({items: items});
				break;
			}
		}
		this.allListAreHoldAndCanAddItem();
	};

	deleteItem = (itemId, e) => {
		let items = this.state.items;
		let itemsLength = items.length;
		for (let i = 0; i < itemsLength; i++) {
			if (items[i].id === itemId) {
				items.splice(i, 1);
				this.setState({items: items});
				break;
			}
		}
		this.allListAreHoldAndCanAddItem();
	};

	handleRemoveAllItem = () => {
		let items = this.state.items;
		let newItems = items.filter(item => item.hold);
		this.setState({
			items: newItems,
			allListAreHold: true
		});
	};

	allListAreHoldAndCanAddItem = () => {
		let items = this.state.items;
		let itemsLength = items.length;
		let holdItemsLength = 0;
		let allListAreHold = this.state.allListAreHold;

		items.forEach(item => {
			if (item.hold) {
				holdItemsLength++;
				(holdItemsLength >= itemsLength) && (allListAreHold = true);
			} else {
				(this.state.allListAreHold) && (allListAreHold = false);
			}
		});
		console.log(itemsLength, holdItemsLength);
		this.setState({
			allListAreHold: allListAreHold,
			canAddItem: holdItemsLength < this.maxItems,
		});
	};

	render() {
		let {items, canAddItem, allListAreHold} = this.state;
		return (
			<div>
				<Field
					handleSubmit={this.handleSubmit}
					disabled={!canAddItem}
				/>
				<div className="bottom-box">

					<ListGroup
						items={items}
						holdItemToggle={this.holdItemToggle}
						deleteItem={this.deleteItem}
						disableGroup={allListAreHold}
					/>
					{(items.length > 0) &&
					<Button
						id="remove-all"
						value="Remove All"
						disabled={allListAreHold}
						handleClick={this.handleRemoveAllItem}
					/>
					}
				</div>
			</div>
		);
	}
}
ReactDOM.render(
	<ToDoApp />,
	document.getElementById("root")
);