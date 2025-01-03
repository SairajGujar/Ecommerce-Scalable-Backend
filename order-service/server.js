import express from 'express'
import { config } from 'dotenv'
import dbConnect from './dbConnect.js'
import { authMiddleware } from './middleware/auth.middleware.js'
import orderRoutes from './routes/order.routes.js'
config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', authMiddleware, orderRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on ${process.env.PORT}`);
})
dbConnect()


