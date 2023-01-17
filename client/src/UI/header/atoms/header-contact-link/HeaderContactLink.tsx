import React from 'react';
import cl from "./header-contact-link.module.css";
  
const HeaderContactLink = () => {
	return (
		<ul className={cl.LinkRow}>
			<li className={cl.Item}><a href="#">Chat with us</a></li>
			<li className={`${cl.Item} ${cl.ItemBlack}`}><a href="tel:+420 336 775 664">+420 336 775 664</a></li>
			<li className={`${cl.Item} ${cl.ItemBlack}`}><a href="#">info@freshnesecom.com</a></li>
		</ul>
	);
};

export default HeaderContactLink;