const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "logangch8v@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how to get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "logangch8v@gmail.com",
    subject: `See ya ${name}!`,
    text: `Could you tell us why are you deleting your account`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};

// sgMail.send({
//   to: "gchlawrence31@gmail.com",
//   from: "logangch8v@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one actually get to you.",
// });
