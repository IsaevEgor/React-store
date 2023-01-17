import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routs';
  
const AppRouter = () => {
	const {user} = useContext(Context)

	return (
		<Routes>
			{user.isAuth && authRoutes.map(({path, element}) => 
				<Route 
					key={path} 
					path={path} 
					element={element}
				/>
			)}
			{publicRoutes.map(({path, element}) => 
				<Route key={path} path={path} element={element}/>
			)}
			<Route path="*" element={<Navigate to="/homepage" />}/>
		</Routes>
	);
};

export default AppRouter;