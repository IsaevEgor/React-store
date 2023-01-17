const {Basket, BasketDevice} = require('../models/models')

class BasketDeviceController {
	async create(req, res) {
		const {deviceId, basketId} = req.body
		const basketDevice = await BasketDevice.create({deviceId, basketId})
		return res.json(basketDevice)
	}

	async getAll(req, res) {
		let {basketId} = req.query
		 let basketDevice = await BasketDevice.findAll({where: {basketId}})
		return res.json(basketDevice)
	}
}

module.exports = new BasketDeviceController() 