import { title } from 'process';
import React from 'react';
import cl from "./DeviceTitle.module.css";
  
const DeviceTitle = ({title} : {title:string}) => {
	return (
		<h5 className={cl.title}>{title}</h5>
	);
};

export default DeviceTitle;