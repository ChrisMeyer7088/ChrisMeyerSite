const express = require('express');
const router = express.Router();

const { sendMail, test } = require('../services/emailService')

router.post('/', (req, res, next) => {
    sendMail(req.body.body, req.body.subject, (reply) => {
        if(reply)
            res.send({success: true});
        else
            res.send({success: false});
    })
})

router.get('/', (req, res) => {
    res.status(200).send({success: true});
})

module.exports = router;