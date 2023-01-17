import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Context } from '../../..';
import { createDevice, fetchBrands, fetchTypes } from '../../../http/deviceApi';
import ButtonSmall from '../../../UI/atoms/buttons/ButtonSmall';
import Input from '../../../UI/atoms/input/Input';
import Modal from '../Modal';
import cl from "./create-device.module.css";
  
const CreateDeviceModal = observer(() => {
	const [modalActive, setModalActive] = useState(Boolean)
	const {device} = useContext(Context)
	const {user} = useContext(Context)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([])

	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data))
		fetchTypes().then(data => device.setTypes(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter((item) => item.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	}

	const selectFile = (e) => {
		setFile(e.target.files[0]);
	}

	const addDevice = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
		formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
		formData.append('img', file)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(data => setModalActive(false))
		.catch((e) => {
			console.log(e.response);
		})
	}

	return (
		<div>
			<div onClick={() => setModalActive(true)}>
				<ButtonSmall onClick={{}} text='Добаить Устройство'/>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className={cl.flexDropdownBlock}>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle variant='outline-dark'>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{device.types.map(type =>
                	                <Dropdown.Item
                	                    onClick={() => device.setSelectedType(type)}
                	                    key={type.id}
                	                >
                	                    {type.name}
                	                </Dropdown.Item>
                	            )}
							</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mt-2 mb-2">
                	        <Dropdown.Toggle variant='outline-dark'>{device.selectedBrand.name || "Выберите тип"}</Dropdown.Toggle>
                	        <Dropdown.Menu>
                	            {device.brands.map(brand =>
                	                <Dropdown.Item
                	                    onClick={() => device.setSelectedBrand(brand)}
                	                    key={brand.id}
                	                >
                	                    {brand.name}
                	                </Dropdown.Item>
                	            )}
                	        </Dropdown.Menu>
            		</Dropdown>
				</div>
				<div className={cl.InputBlock}>
					<input 
						className={cl.Input}
						placeholder='Название Устройства'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input 
						className={cl.Input}
						placeholder='Стоимость Устройства'
						type='text'
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
				</div>
				<div className={cl.FileBlock}>
					<input 
						className={cl.Input}
						type='file'
						onChange={selectFile}
					/>
				</div>
				<div onClick={addInfo}>
					<ButtonSmall
						text='Добавить новое свойство'
					/>
				</div>
				<div className={cl.CharBlock}>
					{info.map((i) => 
						<ul className={cl.CharItemBlock} key={i.number}>
							<li>
								<input 
									className={cl.Input}
									value={i.title} 
									onChange={(e) => changeInfo('title', e.target.value, i.number)} 
									placeholder='Название характеристики' 
									type='text'
								/>
							</li>
							<li>
								<input 
									className={cl.Input}
									value={i.description} 
									onChange={(e) => changeInfo('description', e.target.value, i.number)} 
									placeholder='Описание характеристики' 
									type='text'
								/>
							</li>
							<div onClick={() => removeInfo(i.number)}>
								<ButtonSmall text='Удалить'/>
							</div>
						</ul>
					)}
				</div>
				<div onClick={addDevice}><ButtonSmall text='Добавить устройство'>Добаить Устройство</ButtonSmall></div>
			</Modal>
		</div>
	);
});

export default CreateDeviceModal;