require('dotenv').config();


console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();

//Middle Ware
app.use(cors());
app.use(bodyParser.json());


//Contact Form Submission Endpoint
app.post('/submit', (req, res) => {
    const {name, email, message} = req.body

    //Configur nodemailer
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });


    const mailOptions ={
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
      <h2 style="color: #007BFF; margin-bottom: 10px;">You have a new message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="margin: 10px 0; padding: 10px; background: #f9f9f9; border: 1px solid #eee; border-radius: 5px;">${message}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="font-size: 12px; color: #666;">This message was sent via your portfolio contact form.</p>
    </div>
  `
    }


    transporter.sendMail(mailOptions, (err,info) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to send email'});

        }else {
            console.log(`Email Sent: ${info.response}`);
            res.status(200).json({message:'Email sent Succesfully'});
        }
    })

});


///Server start

const PORT = 3001;

app.listen(PORT, () =>{
    console.log("Server is running");
});





