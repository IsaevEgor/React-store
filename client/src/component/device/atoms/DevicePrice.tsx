import React from 'react';
import cl from "./DevicePrice.module.css";
  
const DevicePrice = ({price} : {price:number}) => {
	let priceFormat = new Intl.NumberFormat().format(price)
	return (
		<span className={cl.price}>{priceFormat} ₽</span>
	);
};

export default DevicePrice;