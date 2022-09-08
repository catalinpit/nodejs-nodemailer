const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3333;

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d60604bf097787",
    pass: "dd06546f268804",
  },
});

app.get("/", (req, res) => {
  try {
    const message = {
      from: "hasura@email.com",
      to: "catalin@hasura.io",
      subject: "Automated email",
      text: "Event triggers in Hasura",
    };

    transporter.sendMail(message, (error, info) => {
      console.log(info);

      res.send(info);
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
