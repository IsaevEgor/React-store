import { $authHost, $host } from "."

export const createType = async (type:any) => {
	const {data} = await $authHost.post('api/type', type)
	return data
}

export const fetchTypes = async () => {
	const {data} = await $host.get('api/type')
	return data
}

export const createBrand = async (brand:any) => {
	const {data} = await $authHost.post('api/brand', brand)
	return data
}

export const fetchBrands = async (id?:any) => {
	const {data} = await $host.get('api/brand', {params: {
		id
	}})
	return data
}

export const createDevice = async (devices:any) => {
	const {data} = await $authHost.post('api/device', devices)
	return data
}

export const fetchDevices = async (typeId:any, brandId:any, page:any, limit:any, allDevices:boolean, id:any) => {
	const {data} = await $host.get('api/device', {params: {
		typeId, brandId, page, limit, allDevices, id
	}})
	return data
}
export const fetchDevicesBrands = async (typeId:any, allDevices:boolean) => {
	const {data} = await $host.get('api/device', {params: {
		typeId, allDevices
	}})
	return data
}
export const fetchOneDevice = async (id:any) => {
	const {data} = await $host.get('api/device/' + id)
	return data
}

export const addRating = async (rating:any) => {
	const {data} = await $authHost.post('api/rating', rating)
	return data
}
export const fetchRating = async (rating:any) => {
	const {data} = await $authHost.get('api/rating', rating)
	return data
}