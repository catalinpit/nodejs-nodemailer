const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d60604bf097787",
    pass: "dd06546f268804",
  },
});

message = {
  from: "hasura@email.com",
  to: "catalin@hasura.io",
  subject: "Automated email",
  text: "Event triggers in Hasura",
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  }

  console.log(info);
});
