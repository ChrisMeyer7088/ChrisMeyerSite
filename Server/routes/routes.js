const express = require('express');
const router = express.Router();

const { sendMail, test } = require('../services/emailService')

router.post('/', (req, res, next) => {
    if(req.body.body != null && req.body.subject != null)
    {
        sendMail(req.body.body, req.body.subject, (reply) => {
            if(reply)
                res.status(200).send({success: true});
            else
                res.status(500).send({success: false});
        })
    }
    else{
        res.status(400).send({success: false});
    }
})

router.get('/', (req, res) => {
    res.status(200).send({success: true});
})

module.exports = router;