const express = require('express');
const router = express.Router();

const { sendMail, test } = require('../services/emailService')

router.post('/contact', (req, res, next) => {
    sendMail(req.body.body, req.body.subject, (reply) => {
        if(reply)
            res.send({success: true});
        else
            res.send({success: false});
    })
})

module.exports = router;