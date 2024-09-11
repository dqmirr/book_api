require('dotenv').config();
const express = require('express');
const route  = require('./routes/routes');

const web = express();

web.use(express.json())
web.use(express.urlencoded({
    extended:true
}))

web.use(route);

web.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

