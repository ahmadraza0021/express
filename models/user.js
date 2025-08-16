// import mongoose from "mongoose";
// // const {Schema} = mongoose;
// // const userSchema = new Schema({ 
// // OR
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const userModel = mongoose.model('User', userSchema);

// export default userModel;


















import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

export default userModel;