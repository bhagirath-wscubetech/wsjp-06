const express = require('express'); // commonjs
// import expres from "express"; // module
const UserRouter = require('./routes/UserRouter');
const BlogRouter = require('./routes/BlogRouter');

const app = express();

app.use(express.json());

app.use("/user", UserRouter);
app.use("/blog", BlogRouter);

app.use(
    "*",
    (req, res) => {
        res.send("404");
    }
)

app.listen(5000, () => { console.log('Server started') });