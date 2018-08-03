// Require express -> Return generation Application
// Podemos criar mais de 1 aplicação.
let express = require('express');
// Criamos a aplicação.
let app = express();

app.get('/', function(req, res, next){
    res.send('Hello Wold!');
});
app.listen(3000);
console.log('Express started on port 3000');
