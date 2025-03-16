import mongoose from 'mongoose';


const StorySchema = new mongoose.Schema({
    userFullName:{
        type:String, required : true
    },
   storyPicture:{type :String, riquired:true}
    

})

export const Story = mongoose.model("Story",StorySchema);