import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const { Schema, model, models } = mongoose
loadType(mongoose)

const ProductSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        Currency: 'NZD',
        get: (v) => v /100
    },
    expense: {
        type: mongoose.Types.Currency,
        Currency: 'NZD',
        get: (v) => v /100
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        }
    ]

}, {timestamps: true, toJSON: {getters: true}})

export const Product = models?.Product || model("Product", ProductSchema)
