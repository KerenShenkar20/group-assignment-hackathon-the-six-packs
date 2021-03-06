const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {userRouter}= require("./Routers/user.router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('Client'));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.set('Content-Type', 'application/json');
    next();
});
app.use('/users',userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));
