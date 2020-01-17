var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,    //<<here
    auth: {
        user: 'sesh.tab.s6@gmail.com',
        pass:'lopfwsnzjgexxliq'
    }
});

var mailOptions = {
  from: 'sesh@fame.com',
  to: 's.seshachalam@gmail.com',
  subject: 'PFA',
  text: 'Attachment',
  attachments: [
    {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
    },
    {   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    }
    ]  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});