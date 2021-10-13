import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

function DB() {
    const db = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.once('open', () => {
        console.log('Connected to database')
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error')
    })
}


export default DB