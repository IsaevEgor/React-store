import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import cl from "./loginAndBusketicons.module.css";
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import { Navigate, useNavigate } from 'react-router-dom';
import Login from '../../../../pages/Login';
import { BASKET_ROUTE, LOGIN_ROUTE } from '../../../../utills/consts';
  
const LoginAndBusketIcons = observer(() => {
	const {user} = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}

	return (
		<div className={cl.iconBlock}>
			{user.isAuth 
				? <a href="#" onClick={() => logOut()}><FontAwesomeIcon icon={faArrowRightFromBracket} className={cl.icon}/></a>
				: <a href='#' onClick={() => navigate(LOGIN_ROUTE)}><FontAwesomeIcon icon={faUser} className={cl.icon}/></a>
			}
			
			<a href="#" onClick={() => navigate(BASKET_ROUTE)}><FontAwesomeIcon icon={faBasketShopping} className={cl.icon}/></a>
		</div>
	);
});

export default LoginAndBusketIcons;