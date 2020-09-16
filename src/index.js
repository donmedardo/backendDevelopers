const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/developer.routes'));

app.listen(3000,()=>{
    console.log(`server on port ${app.get('port')}`);
}
)