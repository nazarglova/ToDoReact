import React from'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import Controls from './Controls';

import removeAllItem from '../actions/removeAllItem';

const ListGroup = ({items,removeAllItem}) => {
	return (
		<div className="list-group">
			<ul className="lists">
				{items.itemsList.map((item) => {
					return (
						<li key={item.id}>
							<div className="quantity">{item.quantity}</div>
							<div className="title">{item.value}</div>
							<Controls item={item}/>
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
		removeAllItem
	}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListGroup);