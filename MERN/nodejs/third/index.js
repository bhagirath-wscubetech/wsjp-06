const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer(
    (req, res) => {
        const parseUrl = url.parse(req.url, true);
        if (parseUrl.pathname == "/create-file" && req.method == "GET") {
            const fileName = parseUrl.query.fileName;
            fs.writeFile(
                `public/${fileName}`,
                "",
                (err) => {
                    console.log(err);
                    if (!err) {
                        var result = {
                            msg: "File created",
                            status: 1
                        };
                        res.end(JSON.stringify(result));
                    } else {
                        var result = {
                            msg: "Unable to create file",
                            status: 0
                        };
                        res.end(JSON.stringify(result));
                    }
                }
            )
        } else if (parseUrl.pathname == "/write-data" && req.method == "POST") {
            var result = {};
            req.on(
                "data",
                (body) => {
                    const { filename, data } = JSON.parse(body.toString());
                    fs.writeFile(
                        `public/${filename}`,
                        data,
                        (err) => {
                            if (!err) {
                                result = {
                                    msg: "Data written in the file",
                                    status: 1
                                };

                            } else {
                                result = {
                                    msg: "Unable to write the data",
                                    status: 0
                                };
                            }
                            res.end(JSON.stringify(result));
                        }
                    )
                }
            )
        } else if (parseUrl.path = "/delete-file" && req.method == "DELETE") {
            const filename = parseUrl.query.filename;
            fs.unlink(
                `public/${filename}`,
                (err) => {
                    if (!err) {
                        var result = {
                            msg: "File deleted",
                            status: 1
                        };
                        res.end(JSON.stringify(result));
                    } else {
                        var result = {
                            msg: "Unable to delete the file",
                            status: 0
                        };
                        res.end(JSON.stringify(result));
                    }
                }
            )
        } else {
            res.end("404");
        }
    }
)


server.listen(
    5000,
    () => { console.log("server started") }
)