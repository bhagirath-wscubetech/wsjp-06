const express = require('express');
const User = require('../models/User');
const UserController = require('../controllers/UserController');
const UserRouter = express.Router();

UserRouter.get(
    "/:id?",
    (req, res) => {
        const result = new UserController().getData(req.params.id);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )

    }
)
UserRouter.post(
    "/create",
    (req, res) => {
        const result = new UserController().create(req.body);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)
UserRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new UserController().delete(req.params.id);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

UserRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new UserController().update(req.params.id, req.body);
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
)

UserRouter.get(
    "/change-status/:id/:new_status",
    (req, res) => {
        const result = new UserController().changeStatus(req.params.id, req.params.new_status);
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
)

module.exports = UserRouter;