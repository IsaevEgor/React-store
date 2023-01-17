import classNames from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { useMemo } from 'react';
import { Context } from '../..';
import { fetchBrands, fetchDevices } from '../../http/deviceApi';
import cl from "./brand-bar.module.css";
  
const BrandBar = observer(() => {
	const {device} = useContext(Context)
	const [active, setActive] = useState(true)

	function getAllDeviceThisType() {
		fetchDevices(device.selectedType.id, null, null, null, false, null).then(data => {
			device.setDevices(data.rows)
		})
	}

	return (
		<div>
			<h2 className={cl.title}>Бренды</h2>
			<ul className={cl.Ul}>
				<li
					className={classNames(cl.item, {[cl.Active] : active})}
					onClick={() => {
						getAllDeviceThisType()
						setActive(true)
					}}
				>
					Все Бренды
				</li>
				{device.brands.map((brand:any) => 
					<li
						className={classNames(cl.item, {[cl.Active] : brand.id === device.selectedBrand.id && !active})}
						key={brand.id}
						onClick={() => {
							device.setSelectedBrand(brand)
							setActive(false)
							}
						}
					>
						{brand.name}
					</li>
				)}
			</ul>
		</div>
	);
});

export default BrandBar;