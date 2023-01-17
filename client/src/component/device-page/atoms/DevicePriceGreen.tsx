import React from 'react';
import cl from "./device-price.module.css";
  
const DevicePriceGreen = ({price}: {price:number}) => {
	let priceFormat = new Intl.NumberFormat().format(price)
	return (
		<span className={cl.price}>{priceFormat} ₽</span>
	);
};

export default DevicePriceGreen;