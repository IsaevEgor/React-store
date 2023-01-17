import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './component/AppRouter';
import { check } from './http/userAPI';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = observer(() => {
	const {user} = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		check().then(data => {
			user.setUser(true)
			user.setIsAuth(true)

			
		}).finally(() => setLoading(false))
	}, [])

	if (loading) {
		return <div style={{width:'100vw', height:"100vh", backgroundColor:"green"}}></div>
	}

  return (
    <div className="App">
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
    </div>
  );
})

export default App;
