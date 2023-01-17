import { $authHost } from "."

export const createBasketDevice = async (deviceId:any, basketId:any) => {
	const {data} = await $authHost.post('api/basket_device', deviceId, basketId)
	return data
}
export const fetchBasketDevice = async (basketId:any) => {
	const {data} = await $authHost.get('api/basket_device', {params: {
		basketId
	}})
	return data
}