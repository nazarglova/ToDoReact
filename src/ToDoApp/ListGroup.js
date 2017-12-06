import React from'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import increase from '../actions/increase';
import decrease from '../actions/decrease';
import itemHoldToggle from '../actions/itemHoldToggle';
import deleteItem from '../actions/deleteItem';
import removeAllItem from '../actions/removeAllItem';

const ListGroup = ({
					   items,
					   increase,
					   decrease,
					   deleteItem,
					   itemHoldToggle,
					   removeAllItem
				   }) => {
	return (
		<div className="list-group">
			<ul className="lists">
				{items.itemsList.map((item) => {
					return (
						<li key={item.id}>
							<div className="quantity">{item.quantity}</div>
							<div className="title">{item.value}</div>
							<button
								id="decrease"
								onClick={() => decrease(item.id, items.itemsList)}
								disabled={item.hold}
							>
								-
							</button>
							<button
								id="increase"
								onClick={() => increase(item.id, items.itemsList)}
								disabled={item.hold}
								value="value"
							>
								+
							</button>
							<input
								type="checkbox"
								id="hold-item"
								onChange={() => itemHoldToggle(item.id, items)}
								checked={item.hold}
							/>
							<button
								id="delete-item"
								onClick={() => deleteItem(item.id, items)}
								disabled={item.hold}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
			{(items.itemsList.length > 0) &&
			<button
				id="remove-all"
				disabled={items.allListAreHold}
				onClick={() => removeAllItem(items)}
			>
				Remove All
			</button>
			}
		</div>
	);
};
const mapStateToProps = ({items}) => ({items});
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		increase,
		decrease,
		deleteItem,
		itemHoldToggle,
		removeAllItem
	}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListGroup);