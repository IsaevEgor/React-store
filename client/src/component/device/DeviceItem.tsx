import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSmall from '../../UI/atoms/buttons/ButtonSmall';
import { DEVICELIST_ROUTE, DEVICE_ROUTE } from '../../utills/consts';
import DeviceDescription from './atoms/DeviceDescription';
import DeviceImage from './atoms/DeviceImage';
import DevicePrice from './atoms/DevicePrice';
import DeviceRating from './atoms/DeviceRating';
import DeviceTitle from './atoms/DeviceTitle';
import cl from "./DeviceItem.module.css";
  
const DeviceItem = ({device} : {device:any}) => {
	const navigate = useNavigate()
	
	return (
		<div className={cl.BlockItem}>
			<div className={cl.ImgBlock}>
				<DeviceImage path={device.img} description={device.name}/>
			</div>
			<div 
				className={cl.Item}
				onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
			>
				<DeviceTitle title={device.name}/>
			</div>
			<div className={cl.Item}>
				<DeviceRating device={device}/>
			</div>
			<div className={cl.ItemRow}>
				<DevicePrice price={device.price}/>
				<ButtonSmall text='Купить' onClick={{}}/>
			</div>
		</div>
	);
};

export default DeviceItem;