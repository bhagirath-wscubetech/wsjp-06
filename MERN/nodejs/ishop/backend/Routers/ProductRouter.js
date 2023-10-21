const express = require("express");
const ProductController = require("../Controllers/ProductController");
const ProductRouter = express.Router();
const fileUpload = require('express-fileupload');

ProductRouter.get(
    "/:id?",
    (req, res) => {
        const id = req.params.id;
        const result = new ProductController().get(id);
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
ProductRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const image = req.files?.image ?? null;
        const result = new ProductController().create(req.body, image);
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
ProductRouter.delete("/delete/:id");
ProductRouter.patch("/change-status/:id/:newStatus");
ProductRouter.patch(
    "/edit/:id",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const image = req.files?.image ?? null;
        const result = new ProductController().edit(req.params.id, req.body, image);
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


module.exports = ProductRouter;