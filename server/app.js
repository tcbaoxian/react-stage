var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.set('port', process.env.PORT || 3000);

// app.use(logger('dev'));
// app.use(logger({
//   stream: accessLog
// }));

app.use(cookieParser());
app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './view/index.html'));
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});