import React, { useState } from 'react';
import { createBrand } from '../../../http/deviceApi';
import ButtonSmall from '../../../UI/atoms/buttons/ButtonSmall';
import Input from '../../../UI/atoms/input/Input';
import Modal from '../Modal';
import cl from "./create-brand.module.css";
  
const CreateBrandModal = () => {
	const [modalActive, setModalActive] = useState(Boolean)
	const [value, setValue] = useState('')
	const addBrand = () => {
		createBrand({name: value}).then(data => {
			setValue('')
			setModalActive(false)
		})
	}

	return (
		<div>
			<div onClick={() => setModalActive(true)}>
				<ButtonSmall onClick={{}} text='Добаить Брэнд'/>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<input 
					className={cl.Input}
					placeholder='Название Бренда' 
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<div onClick={() => addBrand()}>
					<ButtonSmall text='Добавить' onClick={{}}></ButtonSmall>
				</div>
			</Modal>
		</div>
	);
};

export default CreateBrandModal;