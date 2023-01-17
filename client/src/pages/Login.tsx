import React from 'react';
import Header from '../UI/header/organisms/Header';
import FormLogin from '../UI/templates/FormLoginRegistration';
import cl from "./Login.module.css";

  
const Login = () => {

	return (
		<div>
			<Header/>
			<div className={cl.formBlock}>
				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
