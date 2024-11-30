import axios from 'axios'
import dotenv from "dotenv"
const citas = axios.create({
   baseURL: process.env.CITAS_URL
})

export default citas 