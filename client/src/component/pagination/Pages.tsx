import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import cl from "./pages.module.css";
  
const Pages = observer(() => {
	const {device} = useContext(Context)
	const pageCount = Math.floor(device.totalCount / device.limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<ul className={cl.flex}>
			<li className={cl.text}>Pages:</li>
			{pages.map(page => 
				<li
					key={page}
					className={classNames(cl.flexItem, {[cl.flexItemActiv]: device.page === page})}
					onClick={() => device.setPage(page)}
				>
					{page}
				</li>
			)}
		</ul>
	);
});

export default Pages;