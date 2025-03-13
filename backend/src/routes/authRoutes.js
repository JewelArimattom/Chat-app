import express from 'express'
import { signup, login, logout, updateProfile, chechAuth} from '../controllers/authController.js'
import {protectRoute} from '../middleware/protectRoute.js'

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile",protectRoute, updateProfile)

router.get("/check",protectRoute,chechAuth)

export default router