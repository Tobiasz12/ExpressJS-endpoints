var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/userform', function (req, res) {
    const response = {
       first_name: req.query.first_name,
       last_name: req.query.last_name
   };
   res.sendFile('/index.html');
   res.end(JSON.stringify(response));

});

app.listen(3000);
