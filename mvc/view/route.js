const express = require('express')

const router = express.Router();

const Con = require('../controller/userCon')

router.get('/getapi', Con.getdata )
router.post('/postapi', Con.postdata )

router.get('/getsingleuser/:id', Con.getSingleUser)
router.put('/updatesingleuser/:id', Con.updateSingleUser)
router.delete('/deletesingleuser/:id', Con.deleteSingleUser)

module.exports = router;