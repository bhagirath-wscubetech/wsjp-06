const Color = require("../Models/Color");
const Product = require("../Models/Product");


class ColorController {
    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let color = null;
                    if (id != null || id != undefined) {
                        color = await Color.findById(id);
                    } else {
                        color = await Color.find();
                    }

                    color = await Promise.all(
                        color.map(
                            async (c) => {
                                const count = await Product.countDocuments({ color_id: c._id });
                                return {
                                    count, ...c.toJSON()
                                }
                            }
                        )
                    )

                    res(
                        {
                            status: 1,
                            msg: "Data found",
                            color
                        }
                    )
                } catch (err) {
                    console.log(err);
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
}

module.exports = ColorController;