import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const OrderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    ordersItems: {
        type: [OrderItemSchema],

    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", OrderSchema)