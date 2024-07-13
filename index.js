const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server is running...')
});

app.use(express.json());
app.use(express.urlencoded());


//get
app.get('/', (req, res) => {
    console.log('ok')
    res.send('escape')
    });

    let users = [
        {id: 1, username: 'Horia', password: '123'},
        {id: 2, username: 'Ioan', password: '123'},
        {id: 3, username: 'Pavel', password: '123'},
    ];

    app.get('/api/users', (req, res) => res.send(users));


    //post
    app.post('/api/users', (req, res) => {
        if(!req.body.password) {
            res.status(400);
        return res.send({error: 'pass req'})
        }
        let user = {
            id: users.length + 1 ,
            username: req.body.username,
            password: req.body.password
        }
        
        users.push(user);
        res.send(users);
    })

    //put
    app.put('/api/users/:id', (req, res) => {
        let id = req.params.id;
        let userName = req.body.username;
        let pass = req.body.password;
        let index = -1;
        for (let user of users) {
            if (user.id === parseInt(id)) {
                index = user.id - 1;
            }
        }

        if (index >= 0) {
            let user = users[index];
            user.username = userName;
            user.password = pass; 
            res.send(user);
        }else {
            res.status(404)
            res.send({error:'user id is not correct!'})
        }
    })