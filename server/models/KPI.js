
import mongoose from "mongoose";
import {loadType} from 'mongoose-currency'

const { Schema, model,models } = mongoose
loadType(mongoose)

const monthSchema = new Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
}, { toJSON: { getters: true } })

const daySchema = new Schema({
    date: String,
    revenue: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100
    },
}, { toJSON: { getters: true } })

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
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "NZD",
                get: (v) => v / 100
            }
            
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],
}, {timestamps: true, toJSONL: { getters: true}}

)

export const KPI = models?.KPI || model('KPI', KPISchema)
