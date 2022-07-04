const express = require('express')

const router = express.Router()

const {getNotlar,setNotlar,putNotlar,deleteNotlar} = require('../controllers/notController')

router.get('/',getNotlar)
router.post('/',setNotlar)
router.put('/:id',putNotlar)
router.delete('/:id',deleteNotlar)


module.exports = router;