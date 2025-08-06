const express = require('express')
require('dotenv')
const app = express()

PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
    
})