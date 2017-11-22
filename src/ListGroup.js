import React from'react';
import Item from './Item';
const ListGroup = (props) => {
	let {items, holdItemToggle, deleteItem} = props;
	return (
		<div className="list-group">
			<ul className="lists">
				{items.map((item) => {
					return (
						<Item
							key={item.id}
							value={item.value}
							checked={item.hold}
							holdItemToggle={e => {
								holdItemToggle(item.id, e)
							}}
							deleteItem={e => {
								deleteItem(item.id, e)
							}}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default ListGroup;