const express = require('express')

const router = express.Router()

const {getNotlar,setNotlar,updateNotlar,deleteNotlar} = require('../controllers/notController')

// router.get('/',getNotlar)
// router.post('/',setNotlar)
// router.put('/:id',updateNotlar)
// router.delete('/:id',deleteNotlar)

router.route('/').get(getNotlar).post(setNotlar);
router.route('/:id').put(updateNotlar).delete(deleteNotlar);

module.exports = router;