const express = require('express')
const router = express.Router()
const {registerKullanici,loginKullanici,getKullanici} = require('../controllers/kullaniciController')

router.post('/',registerKullanici)
router.post('/login',loginKullanici)
router.get('/kullanici',getKullanici)



module.exports = router
