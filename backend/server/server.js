import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("src"))

ViteExpress.listen(app, 5999, () => console.log("http://localhost:5999"))