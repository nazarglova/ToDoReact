import React from  'react';
import Input from './Input'
import Button from './Button'

const Item = (props) => {
	let {value, holdItemToggle, checked, deleteItem} = props;
	return (
		<li>
			<div className="title">{value}</div>
			<Input
				type="checkbox"
				id="hold-item"
				hendleChange={holdItemToggle}
				checked={checked}
			/>
			<Button
				value="X"
				id="delete-item"
				handleClick={deleteItem}
				disabled={checked}
			/>
		</li>);
};
export default Item;