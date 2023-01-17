import React from 'react';
import { text } from 'stream/consumers';
import cl from "./DeviceDescription.module.css";
  
const DeviceDescription = ({text} : {text:string}) => {
	
	return (
		<p className={cl.Text}>
			{text}
		</p>
	);
};

export default DeviceDescription;