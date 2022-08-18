//dependencies
const express = require('express');


//variables
const app = express();
const port = 3002;
const routerApi = require('./routes')
//settings
app.use(express.json());

//routes
routerApi(app);

//run server

app.listen(port,(error)=>{
    if(error){
        console.log(`algo salio mal ${error}`)
    }
    console.log(`running server in port: ${port}`)

})