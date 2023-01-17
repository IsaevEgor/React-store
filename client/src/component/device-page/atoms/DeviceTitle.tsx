import React from 'react';
import cl from "./device-title.module.css";
  
const DeviceTitle = ({title} : {title:string}) => {
	return (
		<h2 className={cl.Title}>{title}</h2>
	);
};

export default DeviceTitle;