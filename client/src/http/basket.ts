import { $authHost } from "."

export const createBasket = async (userId:any) => {
	const {data} = await $authHost.post('api/basket', userId)
	return data
}
export const fetchBasket = async (userId:any) => {
	const {data} = await $authHost.get('api/basket', {params: {
		userId
	}})
	return data
}