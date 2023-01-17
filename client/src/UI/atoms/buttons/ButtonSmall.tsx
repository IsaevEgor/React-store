import React from 'react';
import cl from "./ButtonSmall.module.css";

interface IButton {
	text: string;
	onClick: object
}

const ButtonSmall = ({text, onClick}: IButton) => {
	return (
		<a className={cl.button}>
			{text}
		</a>
	);
};

export default ButtonSmall;