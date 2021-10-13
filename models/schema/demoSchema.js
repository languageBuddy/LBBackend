import mongoose from 'mongoose'


const testSchema = new mongoose.Schema({
    id: Number,
    name: String,
    scores: [{
        mark: Number,
        subject: String
    }]
})

const testmodel = new mongoose.model('test', testSchema);

export default testmodel;