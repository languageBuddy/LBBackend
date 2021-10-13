import express from 'express'
import dotnev from 'dotenv'
import router from './routes/router.js'
import cors from 'cors'
import DB from './models/db.js'

dotnev.config() //can pass path inside config if have multiple .env files

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routing
app.use('/', router);


app.get('/', (req, res) => {
    res.send('Welcome to language Buddy')
})

const port = process.env.PORT || 80
app.listen(port, async () => {
    await DB()
    console.log(`Server is running on http://localhost:${port}`)
})

