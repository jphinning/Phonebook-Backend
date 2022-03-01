"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactModel_1 = require("../models/ContactModel");
const config = {
    type: "postgres",
    // url: process.env.DATABASE_URL,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'phonebook',
    entities: [ContactModel_1.ContactModel],
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    }
};
exports.default = config;
