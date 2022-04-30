const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(port, () =>
  console.log("Express server is running on localhost:3001")
);
const nodemailer = require("nodemailer");
const creds = require("../config");
var transport = {
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    ("SMTP works fine, Awesome!!");
  }
});

app.use(express.json());

app.post("/send", (req, res, next) => {
  const subject = req.body.subject;
  const body = req.body.body;
  const id = req.body.emailId;

  var mail = {
    from: id,
    to: "joshua.p3reira@gmail.com",
    subject: subject,

    html: body + "\n-" + id,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

// heroku
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
