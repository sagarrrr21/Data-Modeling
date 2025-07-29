import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    discription: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true,
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)