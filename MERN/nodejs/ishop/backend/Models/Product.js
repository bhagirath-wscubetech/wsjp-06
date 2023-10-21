const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        slug: {
            type: String
        },
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
        color_id: {
            type: mongoose.Types.ObjectId,
            ref: "Color"
        },
        status: {
            type: Boolean,
            default: true
        },
        best_seller: {
            type: Boolean,
            default: false
        },
        price: {
            type: Number,
        },
        discount: {
            type: Number,
            default: 0
        },
        final: {
            type: Number
        },
        image: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;