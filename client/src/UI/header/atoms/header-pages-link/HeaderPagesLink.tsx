import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../..';
import { ADMIN_ROUTE, DEVICELIST_ROUTE, DEVICE_ROUTE } from '../../../../utills/consts';
import cl from "./header-pages-link.module.css";
  
const HeaderPagesLink = observer(() => {
	const {user} = useContext(Context)
	
	return (
		<ul className={cl.Row}>
			<li className={cl.Item}>
				<Link to="/blog">Blog</Link>
			</li>
			<li className={cl.Item}>
				<Link to="/about">About Us</Link>
			</li>
			<li className={cl.Item}>
				<Link to="/careers">Careers</Link>
			</li>
			<li className={cl.Item}>
				<Link to={DEVICELIST_ROUTE}>Device</Link>
			</li>
			{user.isAuth
			?
			<li className={cl.Item}>
				<Link to={ADMIN_ROUTE}>Admin Panel</Link>
			</li>
			:
			<li className={cl.Item}></li>
			}

		</ul>
	);
});

export default HeaderPagesLink;