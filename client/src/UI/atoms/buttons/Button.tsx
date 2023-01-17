import React from 'react';
import cl from "./Button.module.css";
  
const Button = ({text}: {text: string}) => {
	return (
		<a className={cl.button}>
			{text}
		</a>
	);
};

export default Button;