const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3333 || process.env.PORT;

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d60604bf097787",
    pass: "dd06546f268804",
  },
});

app.get("/", (req, res) => {
  message = {
    from: "hasura@email.com",
    to: "catalin@hasura.io",
    subject: "Automated email",
    text: "Event triggers in Hasura",
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      
      res.send(error);
    }

    console.log(info);

    res.send(info);
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
