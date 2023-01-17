import { faAngleRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import cl from "./breadcrumbs.module.css";

interface IBreadcrumbsProps {
	device?: {
		name: string
	}
}

const NextBreadCrumbs : React.FC<IBreadcrumbsProps> = ({device}, id) => {

	const {pathname} = useLocation()
	let pathArr:any
	pathArr= pathname.split("/")
	let nameArr = [];
	pathArr.shift()

	if (pathArr[0] == "homepage") {
		pathArr[0] = ["/homepage", "Главная"]
		nameArr.push('Главная')
	} if (pathArr[1] == "device-list") {
		pathArr[1] = ["/homepage/device-list", "Каталог"]
		nameArr.push('Каталог')
	} if (pathArr[0][0] == "/homepage" && pathArr[1][0] == "/homepage/device-list" && pathArr[2] ) {
		pathArr[2] = ["/device-list", `${device?.name!}`]
		nameArr.push()
		
	}
	
	return (
		<ul className={cl.Flex}>
			{pathArr.map((item:any, index:any) => 
					<Link key={index} className={cl.FlexItem} to={item[0]}>{item[1]}<FontAwesomeIcon icon={faAngleRight}/></Link>
			)}
		</ul>
	);
};

export default NextBreadCrumbs;













/*
import { Breadcrumbs } from '@mui/material';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Crumb from './Crumb';

const _defaultGetDefaultTextGenerator= (path:any) => path
const NextBreadCrumbs = ({ getDefaultTextGenerator=_defaultGetDefaultTextGenerator }) => {
	const location = useLocation()


	const breadcrumbs = useMemo(	function genereteBreadCrumbs() {
		const asPathWithoutQuery = location.pathname.split('?')[0]
		const asPathNestedRoutes = asPathWithoutQuery.split('/').filter(v => v.length > 0)

		const crumbList = asPathNestedRoutes.map((subpath:any, index:number) => {
			const href = '/' + asPathNestedRoutes.slice(0, index + 1).join("/")
			const title = subpath
			return{href, title}
		})
		return [{href: '/', title: 'Главная'}, ...crumbList]
	}, [location.pathname, getDefaultTextGenerator])

	console.log(breadcrumbs);
	return (
		<Breadcrumbs aria-label='breadcrumbs'>
			{breadcrumbs.map((crumb, index) => (
				<Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
			))}
		</Breadcrumbs>
	);
};

export default NextBreadCrumbs;*/