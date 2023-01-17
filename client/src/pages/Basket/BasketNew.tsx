

import React, { useEffect, useState } from 'react';
import DeviceItem from '../../component/device/DeviceItem';
import { fetchBasket } from '../../http/basket';
import { fetchBasketDevice } from '../../http/basketDevice';
import { fetchDevices } from '../../http/deviceApi';
import Button from '../../UI/atoms/buttons/Button';
import Footer from '../../UI/footer/Footer';
import Header from '../../UI/header/organisms/Header';
import cl from "./basket.module.css";
  
const Basket = () => {
	let basketDevice:any[] = []
	useEffect(() => {
		const userId = localStorage.userId
	
		fetchBasket(userId).then(data => {
			getBasketDevice(data)
		})


	}, [])
	const getBasketDevice = (data:any) => {
		fetchBasketDevice(data.id).then(data => {
			getDevice(data)
		})
	}
	const getDevice = (data:any) => {
		data.map((item:any) => {
			fetchDevices(null, null, null, null, false, item.deviceId).then(data => {
				basketDevice.push(data)
			})
			
		})
	}
	console.log("Массив устройств данной корзины");
	console.log(basketDevice);
	console.log(`Но его длина равняется ${basketDevice.length}`);
	
	
	return (
		<div className={cl.Container}>
			<Header />
			<div className={cl.Content}>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Basket;