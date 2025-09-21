const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const axios = require("axios");
var nodemailer = require("nodemailer");
const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ length: 4 });


const hashPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const compareHashedPassword = (hashedPassword, password) => {
  const isSame = bcrypt.compareSync(password, hashedPassword);
  return isSame;
};




// const sendDepositEmail = async ({ from, amount, method,timestamp}) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@Bullagetrade.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `



const sendWithdrawalRequestEmail = async ({  from, amount, method,address }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
        .header { background: #11409c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; background: #f7f7f7; }
        .highlight { color: #11409c; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Withdrawal Request Notification</h2>
        </div>
        <div class="content">
          <p>Hello Chief,</p>
          <p>A new withdrawal request has been received with the following details:</p>
          <p>Client: <span class="highlight">${from}</span></p>
          <p>Amount: <span class="highlight">$${amount}</span></p>
          <p>Currency: <span class="highlight">${method}</span></p>
          <p>Wallet Address: <span class="highlight">${address}</span></p>
          <p>Please review and process this request at your earliest convenience.</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>Bullagetrade Team</strong></p>
        </div>
      </div>
    </body>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const userRegisteration = async ({  firstName,email}) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
        .header { background: #11409c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; background: #f7f7f7; }
        .highlight { color: #11409c; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New User Registration</h2>
        </div>
        <div class="content">
          <p>Hello Chief,</p>
          <p>A new user has just registered on the platform:</p>
          <p>Name: <span class="highlight">${firstName}</span></p>
          <p>Email: <span class="highlight">${email}</span></p>
          <p>Please visit your dashboard to review and confirm this registration.</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>Bullagetrade Team</strong></p>
        </div>
      </div>
    </body>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};


const sendWithdrawalEmail = async ({  to, address, amount, method, timestamp, from }) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Bullagetrade" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: "💸 Withdrawal Request Confirmation",
    html: `
    <html>
      <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr style="background-color:#11409c;">
            <td align="center" style="padding:20px;">
              <img src="cid:logo" alt="Bullagetrade Logo" width="80" style="display:block; margin-bottom:10px;">
              <h1 style="color:#ffffff; font-size:22px; margin:0;">Withdrawal Request Confirmation</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">
              <p style="font-size:16px; line-height:1.5; color:#444;">
                Dear ${from},
              </p>
              <p style="font-size:16px; line-height:1.5; color:#444;">
                Your withdrawal request has been successfully submitted. Here are the details:
              </p>

              <table width="100%" style="background-color:#f7f7f7; border-radius:8px; margin:25px 0; border-left:4px solid #11409c;">
                <tr>
                  <td style="padding:20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color:#666;">Amount:</td>
                        <td style="color:#11409c; font-weight:bold;">$${amount}</td>
                      </tr>
                      <tr>
                        <td style="color:#666;">Wallet Address:</td>
                        <td style="color:#11409c; font-weight:bold;">${address}</td>
                      </tr>
                      <tr>
                        <td style="color:#666;">Payment Method:</td>
                        <td style="color:#11409c; font-weight:bold;">${method}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:16px; line-height:1.5; color:#444;">
                Our team will process your request as soon as possible. You will receive another email once the withdrawal is approved.
              </p>

              <div style="text-align:center; margin-top:25px;">
                <a href="https://bullagetrade.com/dashboard/transactions" 
                   style="background-color:#11409c; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block; font-weight:bold;">
                   📊 View Transaction History
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr style="background-color:#f7f7f7;">
            <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
              <p style="margin:0;">© ${new Date().getFullYear()} Bullagetrade | All Rights Reserved</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `,
    attachments: [
      {
        filename: "logo.png",
        path: "./logo.png",
        cid: "logo",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};


const sendDepositEmail = async ({  from, amount, method, timestamp }) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Bullagetrade" <${process.env.EMAIL_USER}>`,
    to: "support@Bullagetrade.com",
    subject: "💰 New Deposit Notification",
    html: `
    <html>
      <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr style="background-color:#11409c;">
            <td align="center" style="padding:20px;">
              <img src="cid:logo" alt="Bullagetrade Logo" width="80" style="display:block; margin-bottom:10px;">
              <h1 style="color:#ffffff; font-size:22px; margin:0;">New Deposit Notification</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">
              <p style="font-size:16px; line-height:1.5; color:#444;">
                Hello Chief,
              </p>
              <p style="font-size:16px; line-height:1.5; color:#444;">
                A new deposit has been initiated with the following details:
              </p>

              <table width="100%" style="background-color:#f7f7f7; border-radius:8px; margin:25px 0; border-left:4px solid #11409c;">
                <tr>
                  <td style="padding:20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color:#666;">Client:</td>
                        <td style="color:#11409c; font-weight:bold;">${from}</td>
                      </tr>
                      <tr>
                        <td style="color:#666;">Amount:</td>
                        <td style="color:#11409c; font-weight:bold;">$${amount}</td>
                      </tr>
                      <tr>
                        <td style="color:#666;">Payment Method:</td>
                        <td style="color:#11409c; font-weight:bold;">${method}</td>
                      </tr>
                      <tr>
                        <td style="color:#666;">Timestamp:</td>
                        <td style="color:#11409c; font-weight:bold;">${timestamp}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:16px; line-height:1.5; color:#444;">
                Please verify this transaction and update the user's balance in the admin dashboard.
              </p>

              <div style="text-align:center; margin-top:25px;">
                <a href="https://bullagetrade.com/admin/dashboard" 
                   style="background-color:#11409c; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block; font-weight:bold;">
                   🔍 Review Transaction
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr style="background-color:#f7f7f7;">
            <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
              <p style="margin:0;">© ${new Date().getFullYear()} Bullagetrade | All Rights Reserved</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `,
    attachments: [
      {
        filename: "logo.png",
        path: "./logo.png",
        cid: "logo",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};

const sendBankDepositRequestEmail = async ({  from, amount, method,timestamp }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
        .header { background: #11409c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; background: #f7f7f7; }
        .highlight { color: #11409c; font-weight: bold; }
        .request-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Bank Transfer Request</h2>
        </div>
        <div class="content">
          <p>Hello Chief,</p>
          <p>A new bank transfer request has been received:</p>
          <div class="request-details">
            <p>Client: <span class="highlight">${from}</span></p>
            <p>Amount: <span class="highlight">$${amount}</span></p>
            <p>Timestamp: <span class="highlight">${timestamp}</span></p>
          </div>
          <p>Please provide the necessary bank account details to process this request.</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>Bullagetrade Team</strong></p>
        </div>
      </div>
    </body>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendDepositApproval = async ({  from, amount, method,timestamp,to}) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
        .header { background: #11409c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; background: #f7f7f7; }
        .highlight { color: #11409c; font-weight: bold; }
        .approval-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
        .cta-button { display: inline-block; background: #11409c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Deposit Approval Confirmation</h2>
        </div>
        <div class="content">
          <p>Dear ${from},</p>
          <p>Great news! Your deposit has been successfully approved:</p>
          <div class="approval-details">
            <p>Amount: <span class="highlight">${amount}</span></p>
            <p>Payment Method: <span class="highlight">${method}</span></p>
            <p>Timestamp: <span class="highlight">${timestamp}</span></p>
          </div>
          <p>Your account has been credited with the deposited amount.</p>
          <a href="/dashboard" class="cta-button">View Dashboard</a>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>Bullagetrade Team</strong></p>
        </div>
      </div>
    </body>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendPlanEmail = async ({  from, subamount, subname,timestamp }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
        .header { background: #11409c; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; background: #f7f7f7; }
        .highlight { color: #11409c; font-weight: bold; }
        .plan-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Plan Subscription</h2>
        </div>
        <div class="content">
          <p>Hello Chief,</p>
          <p>A new plan subscription has been initiated:</p>
          <div class="plan-details">
            <p>Client: <span class="highlight">${from}</span></p>
            <p>Plan Name: <span class="highlight">${subname}</span></p>
            <p>Amount: <span class="highlight">$${subamount}</span></p>
            <p>Timestamp: <span class="highlight">${timestamp}</span></p>
          </div>
          <p>Please review and process this subscription request.</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>Bullagetrade Team</strong></p>
        </div>
      </div>
    </body>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



const sendForgotPasswordEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: `${email}`, // list of receivers
    subject: "Password Reset", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <p>Dear esteemed user,</p>

    <p>Forgot your password?</p>
    <p>We received a request to reset the password for your account</p>

    <p>To reset your password, click on the link below
    <a href="https://Bevfx.com/reset-password">
    reset password
    </p>


    <p>If you did not make this request, please ignore this email</p>

    <p>Best wishes,</p>
    <p>Bevfx Team</p>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendVerificationEmail = async ({ from, url }) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "Account Verification Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <p>Hello Chief</p>

    <p>${from} just verified his Bevfx Team Identity
    </p>

    <p>Click <a href="${url}">here</a> to view the document</p>


    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendWelcomeEmail = async ({ to, otp }) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Bullagetrade" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: "🎉 Welcome to Bullagetrade!",
    html: `
    <html>
      <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr style="background-color:#11409c;">
            <td align="center" style="padding:20px;">
              <img src="cid:logo" alt="Bullagetrade Logo" width="80" style="display:block; margin-bottom:10px;">
              <h1 style="color:#ffffff; font-size:22px; margin:0;">Welcome to Bullagetrade</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">
              <p style="font-size:16px; line-height:1.5; color:#444;">
                Hi there 👋,
              </p>
              <p style="font-size:16px; line-height:1.5; color:#444;">
                We're excited to have you join <b>Bullagetrade</b> 🌟. 
                Our platform is designed to help you achieve your financial goals through smart trading strategies.🚀
              </p>

              <div style="background-color:#f7f7f7; border-radius:8px; padding:20px; margin:25px 0; border-left:4px solid #11409c;">
                <p style="font-size:16px; margin:0 0 10px 0;">Your Verification Code:</p>
                <p style="font-size:24px; color:#11409c; font-weight:bold; margin:0; letter-spacing:2px;">${otp}</p>
                <p style="font-size:14px; color:#666; margin:10px 0 0 0;">This code will expire in 5 minutes</p>
              </div>

              <p style="font-size:16px; line-height:1.5; color:#444;">
                Once verified, you'll have full access to your dashboard where you can start your trading journey.
              </p>

             
              <p style="font-size:14px; color:#555; margin-top:30px;">
                If you have any questions, our support team is here to help 24/7.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr style="background-color:#f7f7f7;">
            <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
              <p style="margin:0;">© ${new Date().getFullYear()} Bullagetrade | All Rights Reserved</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `,
    attachments: [
      {
        filename: "logo.png",
        path: "./logo.png",
        cid: "logo",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};






const resendWelcomeEmail = async ({ to, token }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Account Verification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Bullagetrade</h2>

    <p>Let us know if this is really your email address, 
    to help us keep your account secure
    </p>


    <p>Confirm your email and let's get started!</p>

    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendPasswordOtp = async ({ to }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Password Reset", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Bullagetrade</h2>

    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
    <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
    <p>If you did not request this OTP, please ignore this email.</p>



    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



const resetEmail = async ({ to, token }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Change Password", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Bullagetrade</h2>

    <p>You have requested to change your password.Please use the following OTP to reset your password.
    </p>


    
    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>


    <p>If you did not request this password reset,please contact our support immediately.</p>

    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};







const sendUserPlanEmail = async ({  from, subamount, to,subname,timestamp }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to:to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from},</p>

    <p>You  successfully subscribed to $${subamount} worth of ${subname} plan at ${timestamp}</p>
    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};




const sendUserDetails = async ({ to,password,firstName,token }) =>{
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "User Details", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Hello ${firstName},</h2>

    <p>Thank you for registering on our site
    </p>

    <p>Your login information:</p>
   <p> Email: ${to}</p>
   <p> Password: ${password}</p>


    
    

    <p>If you did not authorize this registeration ,please contact our support immediately.</p>

    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

const sendUserDepositEmail = async ({  from, amount, to,method,timestamp }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to:to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from}</p>

    <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
   <p>From: ${from} </p>
   <p>Amount:$${amount}</p>
    <p>Method: ${method}</p>
    <p>Timestamp:${timestamp}</p>

    <p>All payments are to be sent to your personal wallet address</p>

    <p>Best wishes,</p>
    <p>strategylivetrade Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};


const sendKycAlert = async ({ firstName }) =>{
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Bullagetrade.com ", // list of receivers
    subject: "User Details", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Hello Chief,</h2>

    <p>A user just submitted his/her KYC details.</p>
    <p>Kindly check your dashboard to view details</p>

    <p>Best wishes,</p>
    <p>Bullagetrade Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}





module.exports = {
  hashPassword,
  userRegisteration,
  compareHashedPassword,
  sendDepositEmail,
  sendPlanEmail,
  sendUserPlanEmail,
  sendDepositApproval,
  sendPasswordOtp,
  sendUserDepositEmail,
  sendForgotPasswordEmail,
  sendVerificationEmail,
  sendBankDepositRequestEmail,
  sendWithdrawalEmail,
  sendWithdrawalRequestEmail,
  sendWelcomeEmail,
  resendWelcomeEmail,
  resetEmail,
  sendKycAlert,
  sendUserDetails
};
