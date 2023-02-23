const express = require("express");
const { getJobs, postJob } = require("../controller/JOB.js");
const router = express.Router();


router.get('/',getJobs);
router.post('/',postJob);

module.exports = router;    