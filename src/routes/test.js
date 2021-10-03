import express, { Router } from 'express'
import audiomodel from '../models/schema/audioSchema.js'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()


//@fetch audios
//@public
router.get('/fetch', (req, res) => {
    audiomodel.find({}, (error, docs) => {
        res.send(docs)
    })
})


//@private
//@saved data to database
router.post('/create', auth, async (req, res) => {
    const { data } = req.body

    try {
        audiomodel.insertMany(data, (error, result) => {
            if (error) {
                return res.send({
                    message: error.message
                })
            }
            else {
                return res.send(result)
            }
        })

    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

function auth(req, res, next) {
    const { username, password } = req.body
    if (username == process.env.USER && password == process.env.PASS) {
        next()
    } else {
        res.status(401).send({
            message: "You are not authorized to save data!!"
        })
    }
}


export default router
