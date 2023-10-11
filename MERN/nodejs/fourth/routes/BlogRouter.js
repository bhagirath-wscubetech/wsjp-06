const express = require('express');
const BlogRouter = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

BlogRouter.get(
    "/blog",
    (req, res) => {
        const data = fs.readFileSync("data/blog.json", "utf-8");
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

BlogRouter.delete(
    "/blog/delete/:id",
    (req, res) => {
        const blogId = req.params.id;
        const blogJson = fs.readFileSync("data/blog.json", "utf-8");
        const blogArr = JSON.parse(blogJson);
        const newblogArr = blogArr.filter(
            (data) => {
                if (data.id == blogId) {
                    return false;
                } else {
                    return true;
                }
            }
        )
        fs.writeFile(
            "data/blog.json",
            JSON.stringify(newblogArr), // array to JSON string
            (err) => {
                let result = null;
                if (!err) {
                    result = {
                        msg: "Blog deleted",
                        status: 1
                    }
                } else {
                    result = {
                        msg: "Unable to delete the blog",
                        status: 0
                    }
                }
                res.send(result);
            }
        )
    }
)
BlogRouter.post(
    "/blog/create",
    (req, res) => {
        const blog = req.body;
        let blogJson = fs.readFileSync("data/blog.json", "utf-8");
        if (blogJson == "") {
            fs.writeFileSync("data/blog.json", "[]");
            blogJson = fs.readFileSync("data/blog.json", "utf-8");
        }
        const blogArray = JSON.parse(blogJson);
        blogArray.push({ id: uuidv4(), ...blog });
        fs.writeFile(
            "data/blog.json",
            JSON.stringify(blogArray),
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


module.exports = BlogRouter;