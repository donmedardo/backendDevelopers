const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')


//app.set('port',process.env.PORT || 3000);
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())
app.use(require('./src/routes/developer.routes'));

//listener para heroku
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
    //console.log(`server on port ${app.get('port')}`); 
})