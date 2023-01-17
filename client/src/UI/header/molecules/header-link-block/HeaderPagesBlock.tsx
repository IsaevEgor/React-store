import React from 'react';
import HeaderContactLink from '../../atoms/header-contact-link/HeaderContactLink';
import HeaderPagesLink from '../../atoms/header-pages-link/HeaderPagesLink';
import cl from "./header-pages-block.module.css";
  
const HeaderPagesBlock = () => {
	return (
		<div className={cl.Row}>
			<HeaderContactLink />
			<HeaderPagesLink />
		</div>
	);
};

export default HeaderPagesBlock;