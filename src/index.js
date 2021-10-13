import express from 'express'
import dotnev from 'dotenv'
import router from './routes/router.js'
import mailrouter from './routes/mailRouter.js'
import dbrouter from './routes/dbRouter.js'
import test from './routes/test.js'
import exam from './routes/examRouter.js'
import progress from './routes/progressRouter.js'
import cors from 'cors'
import DB from './models/db.js'

dotnev.config() //can pass path inside config if have multiple .env files

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Welcome to language Buddy')
})

//routing
app.use('/mail', mailrouter);
app.use('/db', dbrouter);
app.use('/db/test', test)
app.use('/exam', exam)
app.use('/progress', progress)



const port = process.env.PORT || 80
app.listen(port, async () => {
    await DB()
    console.log(`Server is running on http://localhost:${port}`)
})

