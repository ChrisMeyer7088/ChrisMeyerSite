const nodemailer = require('nodemailer');
const sensitiveFile = require('../ignoreFolder/sensitiveFile');

module.exports.sendMail =  function(subject, body, callback){
    let userName = 'chrismailbot@gmail.com'
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: userName,
          pass: sensitiveFile.password
        }
    });
    let mailOptions = {
    from: userName,
    to: userName,
    subject: subject,
    text: body
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return callback(false)
        } else {
            return callback(true)
        }
    });
}

return module.exports;