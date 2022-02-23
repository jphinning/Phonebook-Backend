import { ConnectionOptions } from "typeorm";
import { ContactModel } from "../models/ContactModel";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'phonebook',
  entities: [ContactModel],
  synchronize: true,
};

export default config;