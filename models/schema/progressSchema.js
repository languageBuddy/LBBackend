import mongoose from 'mongoose'


const progressSchema = new mongoose.Schema({
    uuid: String,
    progressData: {

    }
})

const progressmodel = new mongoose.model('progress', progressSchema);

export default progressmodel;