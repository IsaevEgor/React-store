import React from 'react';
import cl from "./DeviceImage.module.css";
  
const DeviceImage = ({path, description} : {path: string, description: string}) => {
	return (
		<img
			className={cl.Img}
			src={process.env.REACT_APP_API_URL + path} 
			alt={description}
		/>
	);
};

export default DeviceImage;