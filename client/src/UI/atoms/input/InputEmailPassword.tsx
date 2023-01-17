import React from 'react';
import cl from "./InputEmailPassword.module.css";
  
const InputEmailPassword = ({placeholder, type, value, onClick} : {placeholder: string, type:string, value:any, onClick:any}) => {
	return (
		<div className={cl.inputContainer}>
			<input
				className={cl.input}
				placeholder={placeholder}
				type={type}
				value={value}
				onClick={onClick}
			/>
		</div>

	);
};

export default InputEmailPassword;