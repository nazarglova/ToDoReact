import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import increase from '../actions/increase';
import decrease from '../actions/decrease';
import itemHoldToggle from '../actions/itemHoldToggle';
import deleteItem from '../actions/deleteItem';

const Controls = ({
					  item,
					  items,
					  increase,
					  decrease,
					  deleteItem,
					  itemHoldToggle,
				  }) => {
	return (
		<div className="controls">
			<button
				className="decrease"
				onClick={() => decrease(item.id, items.itemsList)}
				disabled={item.hold}
			>
				-
			</button>
			<button
				className="increase"
				onClick={() => increase(item.id, items.itemsList)}
				disabled={item.hold}
				value="value"
			>
				+
			</button>
			<input
				type="checkbox"
				className="hold-item"
				onChange={() => itemHoldToggle(item.id, items)}
				checked={item.hold}
			/>
			<button
				className="delete-item"
				onClick={() => deleteItem(item.id, items)}
				disabled={item.hold}
			>
				X
			</button>
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
	}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
