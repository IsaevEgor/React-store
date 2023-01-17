const {Basket, BasketDevice} = require('../models/models')

class BasketController {
	async create(req, res) {
		const {userId} = req.body
		const basket = await Basket.create({userId})
		return res.json(basket)
	}

	async getOne(req, res) {
		let {userId} = req.query
		let basket = await Basket.findOne({where: {userId}})
		return res.json(basket)
	}
}

module.exports = new BasketController() 