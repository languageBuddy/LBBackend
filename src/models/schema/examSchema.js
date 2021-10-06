import mongoose from 'mongoose'

const examSchema = new mongoose.Schema({
    question_id: Number,
    questionAudioUrl: String,
    questionText: String,
    answerOptions: [
        {
            answerText: String,
            isCorrect: Boolean
        }
    ],
    correct: {
        type: Number,
        min: 1,
        max: 4
    }
})

const exammodel = mongoose.model('questions', examSchema);

export default exammodel
