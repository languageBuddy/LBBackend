import express from 'express'
import progressmodel from '../models/schema/progressSchema.js'
import audiomodel from '../models/schema/audioSchema.js'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()


router.post('/fetch', (req, res) => {
    const { uuid } = req.body
    progressmodel.findOne({ uuid }, (error, docs) => {
        if (error) {
            return res.send({
                message: 'Error Occured'
            })
        }

        if (docs === null) {
            var data = new progressmodel({
                uuid: uuid,
                progressData: {}
            })
            data.save().catch(error => {
                console.log(error.message)
            })
        }

        return res.send(docs)

    })
})


router.post('/update', async (req, res) => {
    const { uuid, update } = req.body

    progressmodel.findOneAndUpdate({
        uuid
    }, {
        progressData: update
    }, { new: true, upsert: true }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send({
            message: error.message
        })
    })

})



router.post('/fc', (req, res) => {
    const { uuid } = req.body

    const initialState = {
        uuid: uuid,
        progressData: {
            '1': true
        }
    }

    progressmodel.findOne({ uuid }, (err, docs) => {
        if (err) {
            return res.send({
                message: err.message
            })
        }

        if (docs == null) {
            const data = new progressmodel(initialState)
            data.save((error, result) => {
                if (error) {
                    return res.send({
                        message: error.message
                    })
                }
                return res.send(result)
            })
        }
        else {
            return res.send(docs)
        }

    })

})

export default router
