const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());
app.use("/user", UserRouter);

mongoose.connect(
    "mongodb+srv://wscubetech:btVXGHBSSBuNVxBi@cluster0.6qpqbkk.mongodb.net/?retryWrites=true&w=majority",
    {
        dbName: "testing"
    }
).then(
    () => {
        app.listen(
            5000,
            () => {
                console.log('Server chalu ho gaya!')
            }
        )
    }
).catch(
    (err) => {
        console.log(err);
        console.log('Unable to connect to the database');
    }
)


