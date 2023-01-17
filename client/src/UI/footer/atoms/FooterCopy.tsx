import React from 'react';
import cl from "./footerCopy.module.css";

interface IFooterCopy {
	text: string
}
  
const FooterCopy: React.FC<IFooterCopy> = ({text}) => {
	return (
		<span
			className={cl.Text}
		>
			{text}
		</span>
	);
};

export default FooterCopy;