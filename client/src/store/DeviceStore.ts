import { makeAutoObservable } from "mobx"

export default class DeviceStore{
	_types:object
	_brands:object
	_devices:object
	_selectedType
	_selectedBrand
	_page
	_totalCount
	_limit
	
	constructor() {
		this._types = []
		this._brands = []
		this._devices = []
		this._selectedType = {}
		this._selectedBrand = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 3
		makeAutoObservable(this)
	}

	setTypes(types: []) {
		this._types = types
	}
	setBrands(brands: []) {
		this._brands = brands
	}
	setDevices(devices: []) {
		this._devices = devices
	}
	setSelectedType(type:any) {
		this.setPage(1)
		this._selectedType = type
	}
	setSelectedBrand(brand:any) {
		this.setPage(1)
		this._selectedBrand = brand
	}
	setPage(page:any) {
		this._page = page
	}
	setTotalCount(count:any) {
		this._totalCount = count
	}
	setLimit(limit:any) {
		this._limit = limit
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
	get page() {
		return this._page
	}
	get limit() {
		return this._limit
	}
	get totalCount() {
		return this._totalCount
	}
}