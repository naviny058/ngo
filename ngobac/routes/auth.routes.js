const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.post('/register', authController.reqister)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/dashboard', authMiddleware.checkHeader, authController.dashboard)

module.exports = router;