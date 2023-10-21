const Product = require("../Models/Product");

class ProductController {
    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let product = null;
                    if (id != null || id != undefined) {
                        product = await Product.findById(id);
                    } else {
                        product = await Product.find();
                    }
                    res(
                        {
                            status: 1,
                            msg: "Data found",
                            product,
                            baseUrl: "http://localhost:5000/uploads/product/"
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
                        const destination = "./public/uploads/product/" + imageName;
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
                                    const product = new Product(data);
                                    product.save()
                                        .then(
                                            (success) => {
                                                res({
                                                    msg: "Product Added",
                                                    status: 1
                                                })
                                            }
                                        ).catch(
                                            () => {
                                                rej({
                                                    msg: "Unable to add Product",
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


}

module.exports = ProductController;