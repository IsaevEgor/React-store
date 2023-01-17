import React from 'react';
import LoginAndBusketIcons from '../../atoms/header-icons/LoginAndBusketIcons';
import Logo from '../../atoms/logo/Logo';
import SearchProduct from '../../atoms/search-product/SearchProduct';
import cl from "./header-search-block.module.css";

const HeaderSearchBlock = () => {
	return (
		<div className={cl.Row}>
			<Logo/>
			<SearchProduct/>
			<LoginAndBusketIcons/>
		</div>
	);
};

export default HeaderSearchBlock;