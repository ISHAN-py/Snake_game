const Express = require('express');
const fs = require('fs');
const path = require('path');
port = 3000;
app = Express();

app.use(Express.static('C:/Users/ishan/Desktop/Code/webdev/proj/Snake_game/static'));

// app.get('/',(req,res)=>{
//     res.sendFile('C:/Users/ishan/Desktop/Code/webdev/proj/Snake_game/index.html');
// })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});