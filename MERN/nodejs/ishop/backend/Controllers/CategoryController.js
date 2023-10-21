const Category = require("../Models/Category");
const Product = require("../Models/Product");

class CategoryController {
    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let category = null;
                    if (id != null || id != undefined) {
                        category = await Category.findById(id);
                    } else {
                        category = await Category.find();
                    }
                    category = await Promise.all(
                        category.map(
                            async (cat) => {
                                const count = await Product.countDocuments({ category_id: cat._id });
                                return {
                                    count, ...cat.toJSON()
                                }
                            }
                        )
                    )

                    res(
                        {
                            status: 1,
                            msg: "Data found",
                            category,
                            baseUrl: "http://localhost:5000/uploads/category/"
                        }
                    )
                } catch (err) {
                    rej(
                        {
                            status: 0,
                            msg: "Internal server error"
                        }
                    )
                }
            }
        )
    }
    create(data, file) {
        return new Promise(
            (res, rej) => {
                try {
                    const allowedFiles = ["image/jpg", "image/jpeg", "image/gif", "image/webp"];
                    if (allowedFiles.includes(file.mimetype)) {
                        const imageName = new Date().getTime() + Math.floor(Math.random() * 10000000) + file.name;
                        const destination = "./public/uploads/category/" + imageName;
                        file.mv(
                            destination,
                            (err) => {
                                if (err) {
                                    rej(
                                        {
                                            status: 0,
                                            msg: "Unable to upload file"
                                        }
                                    )
                                } else {
                                    data.image = imageName;
                                    const category = new Category(data);
                                    category.save()
                                        .then(
                                            (success) => {
                                                res({
                                                    msg: "Category Added",
                                                    status: 1
                                                })
                                            }
                                        ).catch(
                                            () => {
                                                rej({
                                                    msg: "Unable to add category",
                                                    status: 0
                                                })
                                            }
                                        )
                                }
                            }
                        )
                    } else {
                        rej({
                            msg: "Please upload image only",
                            status: 0
                        })
                    }
                } catch (err) {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }

    edit(id, data, file) {
        return new Promise(
            (res, rej) => {
                try {
                    if (file != null) {
                        const allowedFiles = ["image/jpg", "image/jpeg", "image/gif", "image/webp"];
                        if (allowedFiles.includes(file.mimetype)) {
                            const imageName = new Date().getTime() + Math.floor(Math.random() * 10000000) + file.name;
                            const destination = "./public/uploads/category/" + imageName;
                            file.mv(
                                destination,
                                (err) => {
                                    if (!err) {
                                        Category.updateOne(
                                            { _id: id },
                                            {
                                                name: data.name,
                                                slug: data.slug,
                                                image: imageName
                                            }
                                        ).then(
                                            (success) => {
                                                res(
                                                    {
                                                        msg: "Data updated",
                                                        status: 1
                                                    }
                                                )
                                            }
                                        ).catch(
                                            (error) => {
                                                rej({
                                                    msg: "Unable to updat the data",
                                                    status: 0
                                                })
                                            }
                                        )
                                    } else {

                                    }
                                }
                            )
                        } else {
                            rej(
                                {
                                    msg: "Please upload image only",
                                    status: 0
                                }
                            )
                        }
                    } else {
                        Category.updateOne(
                            { _id: id },
                            {
                                name: data.name,
                                slug: data.slug
                            }
                        ).then(
                            (success) => {
                                res(
                                    {
                                        msg: "Data updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej({
                                    msg: "Unable to updat the data",
                                    status: 0
                                })
                            }
                        )
                    }
                }
                catch (err) {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = CategoryController;