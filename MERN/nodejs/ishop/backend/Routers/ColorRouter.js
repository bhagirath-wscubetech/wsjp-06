const express = require("express");
const ColorController = require("../Controllers/ColorController");
const ColorRouter = express.Router();

ColorRouter.get(
    "/:id?",
    (req, res) => {
        const id = req.params.id;
        const result = new ColorController().get(id);
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
ColorRouter.post("/create");
ColorRouter.delete("/delete/:id");
ColorRouter.patch("/change-status/:id/:newStatus");
ColorRouter.patch("/edit/:id");


module.exports = ColorRouter;