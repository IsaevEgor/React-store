import React from 'react';
import FooterCopy from './atoms/FooterCopy';
import Link from './atoms/Link';
import Title from './atoms/Title';
import cl from "./footer.module.css";

const Footer = () => {
	return (
		<div className={cl.FooterContainer}>
			<div className={cl.FlexBlock}>
				<div className={cl.Column}>
					<div className={cl.ColumnItem}><Title name='Get in touch'/></div>
					<div className={cl.ColumnItem}><Link name='About Us'/></div>
					<div className={cl.ColumnItem}><Link name='Careers'/></div>
					<div className={cl.ColumnItem}><Link name='Press Releases'/></div>
					<div className={cl.ColumnItem}><Link name='Blog'/></div>
				</div>
				<div className={cl.Column}>
					<div className={cl.ColumnItem}><Title name='Connections'/></div>
					<div className={cl.ColumnItem}><Link name='Facebook'/></div>
					<div className={cl.ColumnItem}><Link name='Twitter'/></div>
					<div className={cl.ColumnItem}><Link name='Instagram'/></div>
					<div className={cl.ColumnItem}><Link name='Youtube'/></div>
					<div className={cl.ColumnItem}><Link name='LinkedIn'/></div>
				</div>
				<div className={cl.Column}>
					<div className={cl.ColumnItem}><Title name='Earnings'/></div>
					<div className={cl.ColumnItem}><Link name='Become an Affiliate'/></div>
					<div className={cl.ColumnItem}><Link name='Advertise your product'/></div>
					<div className={cl.ColumnItem}><Link name='Sell on Market'/></div>
				</div>
				<div className={cl.Column}>
					<div className={cl.ColumnItem}><Title name='Account'/></div>
					<div className={cl.ColumnItem}><Link name='Your account'/></div>
					<div className={cl.ColumnItem}><Link name='Returns Centre'/></div>
					<div className={cl.ColumnItem}><Link name='100 % purchase protection'/></div>
					<div className={cl.ColumnItem}><Link name='Chat with us'/></div>
					<div className={cl.ColumnItem}><Link name='Help'/></div>
				</div>
			</div>
			<FooterCopy text='Copyright © 2020 petrbilek.com'/>
		</div>
	);
};

export default Footer;