import mongoose from 'mongoose'

const AudioSchema = new mongoose.Schema({
    module_name : {
        type:String,
        required:true,
        min:5,
        max:25
    },
    module_id : {
        type:Number,
        unique:true,
        required:true
    },
    description : {
        type:String
    },
    module_img_url : String,
    audios : [{
        audio_id : {
            type:Number,
            unique:true,
            required:true
        },
        audio_url : {
            type:String,
            required:true
        },
        audio_text : {
            bangla_text : {
                benglish : String,
                bangla : String
            },
            english : String,
            hindi_text : {
                hinglish : String,
                hindi : String
            }
        }
    }]
})

const audiomodel = mongoose.model('audios',AudioSchema);

export default audiomodel




/*
Audio Schema

Modules
	module-name
	module-id
	description
		
Submodules
	submodule-id
	submodule-image-url
	[audios]
	
audios = {
	audio-id
	audio_url : 
	Text : {
		bengla-text : {
			engish-bangla
			bangla
		}
		english-text : "",
		hindi-text : {
			english-hindi : "",
			hindi : ""
		}
	}
}

*/