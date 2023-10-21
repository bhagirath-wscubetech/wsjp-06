const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        slug: {
            type: String
        },
        status: {
            type: Boolean,
            default: true
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
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;