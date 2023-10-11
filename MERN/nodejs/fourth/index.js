const http = require('http');
const url = require('url');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const server = http.createServer(
    (req, res) => {
        const parseUrl = url.parse(req.url, true);
        if (parseUrl.pathname == "/user" && req.method == "GET") {
            const data = fs.readFileSync("data/user.json", "utf-8");
            if (data != "") {
                res.end(data);
            }
            else {
                res.end(JSON.stringify(
                    {
                        msg: "Data not found",
                        status: 0
                    }
                ));
            }
        } else if (parseUrl.pathname == "/user/create" && req.method == "POST") {
            req.on(
                "data",
                (body) => {
                    const details = JSON.parse(body.toString());
                    let userJson = fs.readFileSync("data/user.json", "utf-8");
                    if (userJson == "") {
                        fs.writeFileSync("data/user.json", "[]");
                        userJson = fs.readFileSync("data/user.json", "utf-8");
                    }
                    const userArray = JSON.parse(userJson); // JSON string to array
                    userArray.push({ id: uuidv4(), ...details });
                    fs.writeFile(
                        "data/user.json",
                        JSON.stringify(userArray), // array to JSON string
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
                            res.end(JSON.stringify(result));
                        }
                    )
                }
            )
        } else if (parseUrl.pathname == "/user/delete" && req.method == "DELETE") {
            const userId = parseUrl.query.id;
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
                    res.end(JSON.stringify(result));
                }
            )
        } else if (parseUrl.path == "/blog" && req.method == "GET") {
            const data = fs.readFileSync("data/blog.json", "utf-8");
            if (data != "") {
                res.end(data);
            }
            else {
                res.end(JSON.stringify(
                    {
                        msg: "Data not found",
                        status: 0
                    }
                ));
            }
        }
        else {
            res.end("404");
        }
    }
)
server.listen(5000, () => { console.log('server started') });