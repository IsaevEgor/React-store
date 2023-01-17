const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
	async create(req, res) {
		const {name} = req.body
		const brand = await Brand.create({name})
		return res.json(brand)
	}

	async getAll(req, res) {
		const {id} = req.query
		let brands;
		if (id) {
			brands = await Brand.findAll({where: {id}})
		}
		if (!id) {
			brands = await Brand.findAll()
		}
		
		return res.json(brands)
	}
}

module.exports = new BrandController()