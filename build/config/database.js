"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactModel_1 = require("../models/ContactModel");
const config = {
    type: "postgres",
    url: process.env.DATABASE_URL || 'postgres://xtsoeetawuvysr:e6b430fbb2d40e46f0d7e9ac021ceffe87d6bc0ba6f0ddeabd95aca37192f38b@ec2-34-206-148-196.compute-1.amazonaws.com:5432/d7t4uk0l9l1dnl',
    // host: process.env.POSTGRES_HOST || 'localhost',
    // port: Number(process.env.POSTGRES_PORT) || 5432,
    // username: process.env.POSTGRES_USER || 'postgres',
    // password: process.env.POSTGRES_PASSWORD || 'postgres',
    // database: process.env.POSTGRES_DB || 'phonebook',
    entities: [ContactModel_1.ContactModel],
    synchronize: true,
    extra: {
        ssl: true
    }
};
exports.default = config;
