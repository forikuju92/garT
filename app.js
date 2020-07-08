//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
// create a new Express application instance
const app = express();
var path = require('path');
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const server = require('http').Server(app);

app.use(express.static(__dirname, 'dist', {index: false})); // set static files location, in this case the route, add a file name if not

server.listen(port, function() {
  console.log("App running on port " + port);
})

// app.listen(process.env.PORT || 3000);

app.get('', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});



const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "<sender email>",
      pass: "<password>"
    }
  });
}

const newLocal = `"<Sender’s name>", "<Sender’s email>"`;
const mailOptions = {
  from: znewLocal,
  to: `<${user.email}>`,
  subject: "<Message subject>",
  html: "<h1>And here is the place for HTML</h1>"
};

transporter.sendMail(mailOptions, callback);


//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(ra ({origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});
