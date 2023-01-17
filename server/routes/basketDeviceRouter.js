const Router = require('express')
const router = new Router()
const BasketDeviceController = require("../controllers/basketDeviceController")

router.post('/', BasketDeviceController.create)
router.get('/', BasketDeviceController.getAll)

module.exports = router