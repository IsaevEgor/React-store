import React, { useEffect, useState } from 'react';
import cl from "./DeviceRating.module.css";
import ReactStars from "react-rating-stars-component";
import { addRating, fetchRating } from '../../../http/deviceApi';

const DeviceRating = ({device}:any) => {
	let [rating, setRating] = useState(0)
	let [click, setClick] = useState(true)
	let [value, setValue] = useState(Number)
	let [count, setCount] = useState(Number)
	const userId = localStorage.userId

	fetchRating(device)
	.then(data =>{
		let sortArr = data.rows.filter((i:any) => i.deviceId == device.id)
		let rateArr = sortArr.map((i:any) => i.rate)
		let rateLength = rateArr.length
		let rateCount = rateArr.reduce((sum:number, i:number) => sum + i, 0)
		let rate = +rateCount / +rateLength
		rate = +rate.toFixed(1)
		setValue(rate)

		let lengthArr = data.rows.filter((i:any) => i.deviceId == device.id)
		setCount(lengthArr.length)
	})

	const handleRatingChanged = (newRating:number) => {
		if (click) {
			addRating({rate: newRating, deviceId: device.id, userId: userId})
			.then(data => {})
			setRating(newRating)
			setClick(false)
		} else {
			alert("Уже вводили")
		}
	}
	
	return (
		<div className={cl.RatingBlock}>
			<ReactStars
				count={5}
				onChange={handleRatingChanged}
				size={24}
				activeColor="#151515"
				value={5}
			/>
			<span>({count})</span>
		</div>

	);
};

export default DeviceRating;