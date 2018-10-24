const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4321
const nodemailer = require('nodemailer')
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) );
require('dotenv').config()
//nodemailer:
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});
app.get('/api/get', (req, res) => {
  console.log('this is working')
  res.send('this worked.').status(200)
})


app.post('/api/inquire', (req, res) => {
  let { name, email, phone, message } = req.body
  let HelperOptions = {
    from: '"JTylerRay.com" <noreply@jtylerray.com>',
    to: 'tylerrayprofessional@gmail.com',
    subject: `You've got a website message from ${name}.`,
    text: `From: ${name} @ ${email} Phone:${phone}.  "${message}" -- `
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
      res.sendStatus(500)
    }else{
      console.log("The message was sent!");
      // console.log(info);
      res.send('successful').status(200)
    } 
  });
  // console.log(name, email, phone, message)
})




app.listen(port, () => { console.log(`deploying ${port} plastic cups`) })