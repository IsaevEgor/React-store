import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { createBasket } from '../../http/basket';
import { login, registration } from '../../http/userAPI';
import { HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utills/consts';
import ButtonSmall from '../atoms/buttons/ButtonSmall';
import cl from "../templates/formLoginRegistration.module.css";
  
const FormLogin = observer(() => {
	const {user}  = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password).then(data => {
					const userId = localStorage.userId;
					createBasket({userId: userId}).then(data => {
						console.log("Создание корзины прошло успешно!");
						console.log(data);
					})
				})
			}
			user.setUser(user)
			user.setIsAuth(true)
			navigate(HOMEPAGE_ROUTE)
		} catch (e:any) {
			alert(e.response.data.message)
		}

	}

	return (
		<form className={cl.Form}>
			<div className={cl.FormBlock}>
				<h1 className={cl.FormTitle}>{isLogin ? "Войти" : "Зарегестрируйся"}</h1>
				<div className={cl.inputBlock}>
					<div className={cl.inputBlockItem}>
						<input
						className={cl.loginInput}
							placeholder="Ваш Логин"
							type='text'
							value={email}
							onChange={(e:any) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<input
						className={cl.loginInput}
							placeholder="Пароль" 
							type='password'
							value={password}
							onChange={(e:any) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className={cl.rowTextButton}>
					{isLogin ?
						<p className={cl.text}>Нет аккаунта?<br/><span><NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink></span></p>
						:
						<p className={cl.text}>Есть аккаунт?<br/><span><NavLink to={LOGIN_ROUTE}>Войди!</NavLink></span></p>
					}
					{isLogin ?
						<div onClick={click}><ButtonSmall text='Войти' onClick={{}}></ButtonSmall></div>
						:
						<div onClick={click}><ButtonSmall text='Регистрация' onClick={{}}></ButtonSmall></div>
					}
				</div>
			</div>
		</form>
	);
});

export default FormLogin;