# Contact Form Setup Instructions

## ✅ What's Been Set Up

1. **Netlify Function**: `netlify/functions/send-mail.js` - Handles email sending
2. **Updated Contact Form**: Modified `index.html` to use the new function
3. **Configuration**: Added `netlify.toml` for proper function routing
4. **Dependencies**: `nodemailer` is already in `package.json`

## 🔧 Environment Variables Setup

In your Netlify dashboard, go to:
**Site Settings → Environment Variables**

Add these variables:
```
SMTP_USER = yourgmail@gmail.com
SMTP_PASS = your-app-password
```

## 📧 Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this password as `SMTP_PASS` (not your regular Gmail password)

## 🚀 How It Works

1. User fills out the contact form
2. JavaScript sends data to `/.netlify/functions/send-mail`
3. Function uses nodemailer to send email via Gmail SMTP
4. User gets success/error message

## 📝 Form Fields

- **Name**: Required text input
- **Email**: Required email input  
- **Message**: Required textarea

## 🔍 Testing

1. Deploy to Netlify
2. Fill out the contact form
3. Check your email (ashishkamaliya1@gmail.com) for the message
4. Check Netlify function logs if there are issues

## 🛠️ Troubleshooting

- **Function not found**: Check `netlify.toml` configuration
- **Email not sending**: Verify environment variables and Gmail app password
- **CORS errors**: Function includes CORS headers for cross-origin requests

## 📁 Files Modified

- `netlify/functions/send-mail.js` - New email function
- `netlify.toml` - New configuration file
- `index.html` - Updated form and JavaScript
- `package.json` - Already had nodemailer dependency
