const express = require("express");
const CategoryController = require("../Controllers/CategoryController");
const CategoryRouter = express.Router();
const fileUpload = require('express-fileupload');

CategoryRouter.get(
    "/:id?",
    (req, res) => {
        const id = req.params.id;
        const result = new CategoryController().get(id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
);
CategoryRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const image = req.files?.image ?? null;
        const result = new CategoryController().create(req.body, image);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
);
CategoryRouter.delete("/delete/:id");
CategoryRouter.patch("/change-status/:id/:newStatus");
CategoryRouter.patch(
    "/edit/:id",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const image = req.files?.image ?? null;
        const result = new CategoryController().edit(req.params.id, req.body, image);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
);


module.exports = CategoryRouter;