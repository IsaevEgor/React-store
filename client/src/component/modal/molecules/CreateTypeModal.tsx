import React, { useState } from 'react';
import { createType } from '../../../http/deviceApi';
import ButtonSmall from '../../../UI/atoms/buttons/ButtonSmall';
import Input from '../../../UI/atoms/input/Input';
import Modal from '../Modal';
import cl from "./create-type.module.css";
  
const CreateTypeModal = () => {
	const [modalActive, setModalActive] = useState(Boolean)
	const [value, setValue] = useState('')
	const addType = () => {
		createType({name: value}).then(data => {
			setValue('')
			setModalActive(false)
		})
	}

	return (
		<div>
			<div onClick={() => setModalActive(true)}>
				<ButtonSmall onClick={{}} text='Добаить Тип'/>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<input
					className={cl.Input}
					placeholder='Название Типа' 
					type='text' 
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<div onClick={() => addType()}>
					<ButtonSmall text='Добаить Тип' onClick={{}}></ButtonSmall>
				</div>
			</Modal>
		</div>
	);
};

export default CreateTypeModal;