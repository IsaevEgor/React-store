import React from 'react';
import NextBreadCrumbs from '../../../component/breadcrumbs/Breadcrumbs';
import HeaderCategoriesBlock from '../molecules/header-categories-block/HeaderCategoriesBlock';
import HeaderPagesBlock from '../molecules/header-link-block/HeaderPagesBlock';
import HeaderSearchBlock from '../molecules/header-search-block/HeaderSearchBlock';
import cl from "./header.module.css";
  
const Header = () => {
	return (
		<div className={cl.block}>
			<HeaderPagesBlock />
			<HeaderSearchBlock />
			<HeaderCategoriesBlock />
		</div>
	);
};

export default Header;