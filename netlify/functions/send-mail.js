const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    // Handle CORS preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
            body: '',
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    success: false,
                    error: "Name, email, and message are required"
                }),
            };
        }

        // SMTP Transporter (Gmail example)
        let transporter = nodemailer.createTransporter({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,   // Netlify ENV variable
                pass: process.env.SMTP_PASS,   // Netlify ENV variable (App Password)
            },
        });

        // Send mail
        await transporter.sendMail({
            from: email,
            to: "ashishkamaliya1@gmail.com",        // Your receiving mail
            subject: "New Contact Form Message from " + name,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your website contact form</em></p>
      `,
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                success: true,
                msg: "Mail sent successfully"
            }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                success: false,
                error: error.message
            }),
        };
    }
};
