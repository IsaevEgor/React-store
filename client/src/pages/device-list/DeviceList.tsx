import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import BrandBar from '../../component/brand-bar/BrandBar';
import NextBreadCrumbs from '../../component/breadcrumbs/Breadcrumbs';
import ProductItem from '../../component/device/DeviceItem';
import Pages from '../../component/pagination/Pages';
import { fetchBrands, fetchDevices, fetchDevicesBrands, fetchTypes } from '../../http/deviceApi';
import Footer from '../../UI/footer/Footer';
import Header from '../../UI/header/organisms/Header';
import cl from "./device--list.module.css";
  
const DeviceList = observer(() => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchDevices(null, null, 1, 5, false, null).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8, false, null).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

	useEffect(() => {
		fetchDevicesBrands(device.selectedType.id, true).then(data => {
			let idArr: number[] = []
			if (data.rows.length == 0) {
				fetchBrands(null).then(data => {
					device.setBrands(data)
				})
			} else {
				for (let i = 0; i < data.rows.length; i++) {

					let id = data.rows[i].brandId
					idArr.push(id)
				
					fetchBrands(idArr).then(data => {
						device.setBrands(data)
					})
				}
			}

		})
	}, [device.selectedType])

	return (
		<div className={cl.FlexPage}>
			<div className={cl.FlexTop}>
				<div className={cl.header}>
					<Header/>
				</div>
				<div className={cl.breadcrumbsBlock}>
					<NextBreadCrumbs/>
				</div>
			</div>
			<div className={cl.FlexCenter}>
				<div className={cl.flexBlock}>
					<div className={cl.flexNavigate}>
						<BrandBar/>
						<Pages/>
					</div>
					<div className={cl.GridList}>
						{device.devices.map((device:any) =>
						<div key={device.id} className={cl.DeviceItem}>
							<ProductItem device={device}/>
						</div>
						)}
					</div>
				</div>
			</div>
			<div className={cl.Flexbottom}>
				<Footer/>
			</div>
		</div>
	);
});

export default DeviceList;