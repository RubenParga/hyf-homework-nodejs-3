const express = require('express');
var app = express();

let users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET /users
app.get('/users', (req, res) => res.json(users));


//GET /user/:id
app.get('/user/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id);
    res.json(user);
});

//POST id{0}
app.post('/user', (req, res) => {    
    users.push({ id: 0 });    
    res.json(users);
});

//DELETE /user/:id
app.delete('/user/:id', (req, res) => {

   
    if(users.length > 0){
        users = [];
        res.status(202).json({
            ok: true
        })
    } else {
        res.status(204).json({
            ok: true
        })
    }

});

//Port
app.listen(3000, () => {
    console.log('Listen on port 3000');
})