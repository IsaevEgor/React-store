import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Context } from '../../../..';
import cl from "./header-categories-vlock.module.css";
import { Navigate } from 'react-router-dom';
import { fetchTypes } from '../../../../http/deviceApi';

const HeaderCategoriesBlock = () => {
	const {device} = useContext(Context)
	const [cliced, setCliced] = useState()

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
	}, [])

	return (
		<div className={cl.Block}>
			<ul className={cl.BlockCategories}>
				{device.types.map((type:any) =>
					<li
						key={type.id}
						onClick={() => {
							device.setSelectedType(type)
							setCliced(type.id)
						}}
						className={classNames({[cl.Active]: type.id === device.selectedType.id}, cl.CategoriesItem)}
					>
						{type.name}
					</li>
				)}
			</ul>
		</div>
	);
};

export default HeaderCategoriesBlock;