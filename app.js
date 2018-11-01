const express = require('express');
const test1 = require('./Routes/blog');
const app = express();
const bodyParser = require('body-parser');
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res)=>{
  res.json({name: 'bola ojo'})
})

app.use('/api/blog', test1);


app.listen(5000 , ()=>console.log('server started'));