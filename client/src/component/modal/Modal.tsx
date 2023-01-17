import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import ButtonSmall from '../../UI/atoms/buttons/ButtonSmall';
import cl from "./modal.module.css";
  
const Modal = ({active, setActive, children} : {active:any, setActive:any, children:any}) => {
	return (
		<div className={classNames([cl.modal], {[cl.modalActive]: active})} onClick={() => setActive(false)}>
			<div className={classNames([cl.modalContent], {[cl.ContentActive]: active})} onClick={(e) => e.stopPropagation()}>
				<span onClick={() => setActive(false)}><FontAwesomeIcon className={cl.icon} icon={faXmark}/></span>
				{children}
			</div>
		</div>
	);
};

export default Modal;