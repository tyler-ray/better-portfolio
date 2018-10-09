const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 4321
const nodemailer = require ('nodemailer')
app.use(bodyParser.json())
require ('dotenv').config()
//nodemailer:
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
app.get('/api/get', (req,res)=>{
    console.log('this is working')
    res.send('this worked.').status(200)
})
app.post('/api/inquire', (req,res)=>{
    
    let {name, email, phone, message} = req.body
console.log(req.body)
console.log(name, email, phone, message)
        res.send('done').status(200)
        
        let HelperOptions = {
              from: '"Tyler" <tyler.ray.97@gmail.com>',
              to: 'tyler.ray.97@gmail.com',
              subject: `Your listing got a message from: ${name}`,
              text: `Tyler, you have a message from:${name} @${email} @${phone}: ${message}`
    };
    
      transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
          return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
        res.sendStatus(200)
    });
    })
      
    





app.listen(port, () =>{console.log(`deploying ${port} plastic cups`)})