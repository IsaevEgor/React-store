import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../../../utills/consts';
import cl from "./logo.module.css";
  
const Logo = () => {
	return (
		<NavLink
			to={HOMEPAGE_ROUTE}
			className={cl.blockLogo}>
			<img className={cl.logo} src={require('../../../../assets/logo/logo-headers.png')} alt="logo" />
		</NavLink>
	);
};

export default Logo;