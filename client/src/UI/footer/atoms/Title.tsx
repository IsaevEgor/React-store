import React from 'react';
import cl from "./title.module.css";

interface ITitle {
	name: string
}
  
const Title: React.FC<ITitle> = ({name}) => {
	return (
		<h4
			className={cl.Title}
		>
			{name}
		</h4>
	);
};

export default Title;