const User = require("../models/User");

class UserController {
    getData(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let user = null;
                    if (id != null || id != undefined) {
                        user = await User.findOne({ _id: id });
                        // get the user with given Id
                    } else {
                        user = await User.find();
                        //  get all users
                    }
                    res({
                        status: 1,
                        user
                    })
                } catch (err) {
                    // console.log(err.message);
                    rej({
                        status: 0,
                        msg: "Internal server error"
                    })
                }
            }
        )
    }

    create(data) {
        return new Promise(
            (res, rej) => {
                try {
                    const user = new User(data);
                    user.save()
                        .then(
                            (success) => {
                                res(
                                    {
                                        msg: "User created",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej(
                                    {
                                        msg: "Unable to create the user",
                                        status: 0,
                                        error
                                    }
                                )
                            }
                        )
                } catch (err) {
                    rej(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                    User.deleteOne({ _id: id })
                        .then(
                            (success) => {
                                res({
                                    msg: "User deleted",
                                    status: 1
                                })
                            }
                        ).catch(
                            (error) => {
                                rej({
                                    msg: "Unable to delete the user",
                                    status: 0,
                                })
                            }
                        )
                } catch (err) {
                    rej(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    update(id, data) {
        return new Promise(
            (res, rej) => {
                User
                    .updateOne(
                        { _id: id },
                        data
                    ).then(
                        (success) => {
                            res({
                                msg: "User updated",
                                status: 1
                            })
                        }
                    ).catch(
                        (error) => {
                            rej({
                                msg: "Unable to update the user",
                                status: 0
                            })
                        }
                    )
            }
        )
    }


    changeStatus(id, status) {
        return new Promise(
            (res, rej) => {
                try {
                    User.updateOne(
                        { _id: id },
                        { status }
                    )
                        .then(
                            () => {
                                res({
                                    msg: "Status changed",
                                    status: 1
                                })
                            }
                        ).catch(
                            () => {
                                rej({
                                    msg: "Unable to change status",
                                    status: 0
                                })
                            }
                        )
                } catch (err) {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = UserController;