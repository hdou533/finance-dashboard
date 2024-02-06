import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const { Schema, model, models } = mongoose
loadType(mongoose)

const TransactionSchema = new Schema({
    amount: {
        type: mongoose.Types.Currency,
        Currency: 'NZD',
        get: (v) => v /100
    },
    buyer: {
        type: String,
        required: true,
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]

}, {timestamps: true, toJSON: {getters: true}})

export const Transaction = models?.Transaction || model("Transaction", TransactionSchema)
