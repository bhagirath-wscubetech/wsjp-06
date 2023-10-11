const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const UserRouter = express.Router();

UserRouter.get(
    "",
    (req, res) => {
        const data = fs.readFileSync("data/user.json", "utf-8");
        if (data != "") {
            res.send(data);
        }
        else {
            res.send({
                msg: "Data not found",
                status: 0
            });
        }
    }
)

UserRouter.post(
    "/create",
    (req, res) => {
        const details = req.body;
        let userJson = fs.readFileSync("data/user.json", "utf-8");
        if (userJson == "") {
            fs.writeFileSync("data/user.json", "[]");
            userJson = fs.readFileSync("data/user.json", "utf-8");
        }
        const userArray = JSON.parse(userJson);
        userArray.push({ id: uuidv4(), ...details });
        fs.writeFile(
            "data/user.json",
            JSON.stringify(userArray),
            (err) => {
                let result = null;
                if (!err) {
                    result = {
                        msg: "Data added",
                        status: 1
                    }
                } else {
                    result = {
                        msg: "Unable to add data",
                        status: 0
                    }
                }
                res.send(result);
            }
        )
    }
)

UserRouter.delete(
    "/delete/:id",
    (req, res) => {
        const userId = req.params.id;
        const userJson = fs.readFileSync("data/user.json", "utf-8");
        const userArr = JSON.parse(userJson);
        const newUserArr = userArr.filter(
            (data) => {
                if (data.id == userId) {
                    return false;
                } else {
                    return true;
                }
            }
        )
        fs.writeFile(
            "data/user.json",
            JSON.stringify(newUserArr), // array to JSON string
            (err) => {
                let result = null;
                if (!err) {
                    result = {
                        msg: "User deleted",
                        status: 1
                    }
                } else {
                    result = {
                        msg: "Unable to delete the user",
                        status: 0
                    }
                }
                res.send(result);
            }
        )
    }
)

module.exports = UserRouter;