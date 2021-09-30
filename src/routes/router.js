import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world good morning')
})


export default router