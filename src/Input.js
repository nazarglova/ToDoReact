import React from "react";
const Input = (props) => {
	let {type, name, id, placeholder, disabled, checked,hendleChange,handleClick} = props;
	return (
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			disabled={disabled}
			checked={checked}
			onChange={hendleChange}
			onClick={handleClick}
		/>
	);
};
export default Input;