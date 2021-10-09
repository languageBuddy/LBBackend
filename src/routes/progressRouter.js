import express from 'express'
import progressmodel from '../models/schema/progressSchema.js'
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


export default router
