const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chotuchaudhary300@gmail.com',
        pass: 'Ankit300@'
    }
});


app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    
    const mailOptions = {
        from: email,
        to: 'chotuchaudhary300@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error: Could not send email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
