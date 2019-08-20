import dotenv from 'dotenv'

dotenv.config({ path: './.env.development' })

export const USERNAME = process.env.USERNAME
export const PASSWORD = process.env.PASSWORD
export const VALID_NAME = 'Gabriela Mosqueda Briones'
export const INVALID_USER = 'invalidUser'
export const INVALID_PASS = 'invalidPass'
export const INVALID_NAME = 'helloWorld'
export const SINGLE_SYLLABE = 'ga'
export const MULTIPLE_SYLLABE = 'ga mo'
export const BASE_URL = process.env.BASE_URL