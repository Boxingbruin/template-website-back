const nodemailer = require("nodemailer");
const db = require("../app/models");

exports.send = (req, res) => {
    const mail = {
        emails: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      };
    console.log(mail);

    //if (err) throw err;

    if (req.body.subject == "" || req.body.subject == undefined)
        return res.json({ success: false, msg: 'Subject field is missing!' });

    if (req.body.message == "" || req.body.message == undefined) 
        return res.json({ success: false, msg: 'Message field is missing!' });
    

    if(req.body.emails == "" || req.body.emails == undefined)
        return res.json({ success: false, msg: 'Emails are missing!' });

    res.status(200).json({ success: true, msg: 'Emails have been sent!' });
/*
    // async..await is not allowed in global scope, must use a wrapper
    async function sendEmail(mail) {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
        });
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  
  sendEmail().catch(console.error);*/

}