import React from 'react';
import cl from "./device-page.module.css";
  
const DeviceImg = ({img, name}:{img:string, name:string}) => {
	return (
		<div className={cl.BlockImg}>
			<img className={cl.Img} src={img} alt={name} />
		</div>
	);
};

export default DeviceImg;