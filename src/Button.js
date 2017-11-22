import React from "react";
const Button = (props) => {
	let {type, id, disabled, handleClick, value} = props;
	return (
		<button
			type={type}
			id={id}
			disabled={disabled}
			onClick={handleClick}
		>
			{value}
		</button>
	);
};
export default Button;