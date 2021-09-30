import express from 'express'
import dotnev from 'dotenv'
import router from './routes/mail.js'

dotnev.config() //can pass path inside config if have multiple .env files

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routing
app.use('/', router);

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

