const express = require("express");
const cors = require('cors');
const CategoryRouter = require("./Routers/CategoryRouter");
const mongoose = require("mongoose");
const ColorRouter = require("./Routers/ColorRouter");
const ProductRouter = require("./Routers/ProductRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/category", CategoryRouter);
app.use("/color", ColorRouter);
app.use("/product", ProductRouter);


// localhost
// 0.0.0.0

mongoose.connect(
    "mongodb://0.0.0.0:27017",
    {
        dbName: "ishop-wsjp06"
    }
).then(
    () => {
        app.listen(
            5000,
            () => console.log('server chalu ho gaya hai!')
        )
    }
).catch(
    (err) => {
        console.log(err);
        console.log('Unable to start the server');
    }
)