import { type } from 'os';
import React from 'react';
import cl from "./input.module.css";

const Input = ({placeholder, type} : {placeholder: string, type:string}) => {
	return (
		<div className={cl.inputContainer}>
			<input
				className={cl.input}
				placeholder={placeholder}
				type={type}
			/>
		</div>

	);
};

export default Input;