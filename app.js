let express = require('express');
let app = express();

app.use(express.json());

app.get('/hello', function (req, res) {
  res.send("Hello Express JS");
});

app.get('/user', function (req, res){
    let firstname = req.query.firstname || "Pritesh";
    let lastname = req.query.lastname || "Patel";
    res.json({ firstname, lastname });
})

app.post('/user', function (req, res) {
    let { firstname, lastname } = req.body;
    res.json({ firstname, lastname });
});

app.listen(3000, function () {
  console.log("Port 3000 is active");
});