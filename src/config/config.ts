import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT
export const NODE_ENV = process.env.NODE_ENV
export const MONGO_URL_LOCAL =  process.env.MONGO_DB_URL_LOCAL
export const DB_NAME = process.env.DB_NAME