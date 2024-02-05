
import mongoose, { models } from "mongoose";
import {loadType} from 'mongoose-currency'
import { Schema, model, models} from "mongoose";

loadType(mongoose)

const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
        },
        expenseByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "NZD",
                get: (v) => v / 100
            }
            
        },
}

)

export const KPI = models?.KPI || model('KPI', KPISchema)
