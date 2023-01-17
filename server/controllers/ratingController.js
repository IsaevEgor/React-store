const {Rating, User} = require('../models/models')
class RatingController {
	async create(req, res) {
		const {rate, deviceId, userId} = req.body
		const rating = await Rating.create({rate, deviceId, userId})
		return res.json(rating)
	}

	async getAll(req, res) {
		let {deviceId} = req.query
		let rating;
		if (deviceId) {
			rating = await Rating.findAndCountAll({where: {deviceId}})
		} else {
			rating = await Rating.findAndCountAll()
		}
		return res.json(rating)

	}
}

module.exports = new RatingController()