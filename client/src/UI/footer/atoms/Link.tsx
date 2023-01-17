import React from 'react';
import cl from "./Link.module.css";
  
interface ILink {
	name: string
}

const Link: React.FC<ILink> = ({name}) => {
	return (
		<a
			href='#'
			className={cl.Link}
		>
			{name}
		</a>
	);
};

export default Link;