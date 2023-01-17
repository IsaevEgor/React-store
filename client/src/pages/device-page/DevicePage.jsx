import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import NextBreadCrumbs from '../../component/breadcrumbs/Breadcrumbs';
import DeviceDescription from '../../component/device-page/atoms/DeviceDescription';
import DeviceImg from '../../component/device-page/atoms/DeviceImg';
import DevicePriceGreen from '../../component/device-page/atoms/DevicePriceGreen';
import DeviceTitle from '../../component/device-page/atoms/DeviceTitle';
import { fetchOneDevice } from '../../http/deviceApi';
import ButtonSmall from '../../UI/atoms/buttons/ButtonSmall';
import Header from '../../UI/header/organisms/Header';
import cl from "./device-page.module.css";
  
const DevicePge = observer(() => {
	const [device, setDevice] = useState({info: []})
	const {id} = useParams()
	console.log(device);
	
	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [])

	return (
		<div className={cl.Container}>
			<div className={cl.Header}>
				<Header device={device}/>
			</div>
			<NextBreadCrumbs device={device}/>
			<div className={cl.Title}>
				<DeviceTitle title={device.name}/>
			</div>
			<div className={cl.FlexContainer}>
				<div className={cl.ImgFlexBlock}>
					<DeviceImg img={process.env.REACT_APP_API_URL + device.img} name={device.name}/>
				</div>
				<div className={cl.ContentFlexBlock}>
					<div className={cl.Description}>
						<DeviceDescription description={device.description}/>
					</div>
					<div className={cl.FlexPriceButton}>
						<div className={cl.price}>
							<DevicePriceGreen price={device.price}/>
						</div>
						<div className={cl.button}>
							<ButtonSmall text="Добавить в корзину"/>
						</div>
					</div>

				</div>
			</div>
			<div className={cl.CharBlock}>
				<h3 className={cl.CharTitleBlock}>Характеристики</h3>
				{device.info.map((item, index) =>
					<div key={index} className={cl.CharItem} key={item.id}><p className={cl.CharTitle}>{item.title}: </p><span>{item.description}</span></div>
				)}
			</div>
		</div>
	);
});

export default DevicePge;