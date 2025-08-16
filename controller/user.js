// export const controller = (req, res) => {
//     res.json({
//       messsage: 'hello world',
//     });
//   };
  
//   export const controller1 = (req, res) => {
//     const { id, ty } = req.params;
//     console.log(id, ty);
//     res.json({
//       messsage: 'this is the second route',
//     });
//   };




// export const controller = (req, res) => {
//   res.json({
//     message: 'Hi my self Ahmad'
//   });
// };

// export const controller1 = (req, res) => {
//   res.json({
//     message: 'Hi my full name is Ahmad Raza'
//   });
// };



// import userModel from "../models/user.js";
// export const signup = async(req,res) =>{
//   const {username, email, password } = req.body;
//   const newUser = await userModel.create({username, email, password});
//   //201 =>create
//   res.status(201).json(newUser);
// };
// export const getUser = async(req, res) => {
//   const {username} = req.params;
//   const users = await userModel.find(username);
//   // const {id} = req.params;
//   // const users = await userModel.findById(id);
//   res.status(200).json(users);
// }


// import userModel from '../models/user.js'
// export const signUp = async(req, res) => {
//   const {username, email, password} = req.body;
//   const newUser = await userModel.create({username, email, password});
//   //_doc is used to access withing nested object
//   const {password: pass, ...others} = newUser._doc;
//   res.status(201).json(others);
// }
// export const getUser = async(req, res) => {
//   //   const {username} = req.params;
//   //   const users = await userModel.find(username);
//   const {id} = req.params;
//   const users = await userModel.findById(id);
//   res.status(200).json(users);
// }






import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
export const SignUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existedEmail = await User.findOne({ email });
    const existedUsername = await User.findOne({ username });
    if (existedEmail) {
      return res.status(400).json({ message: 'email is already taken' });
    }
    if (existedUsername) {
      return res.status(400).json({ message: 'username is already taken.' });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    const { password: pass, ...others } = user._doc;
    res.status(201).json(others);
  } catch (error) {
    console.log(error);
  }
};

export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });
    const isPasswordCorrect = bcryptjs.compareSync(
      password,
      existedUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(403).json({
        // message: 'Password is incorrect',
        message: 'Invalid credentials',
      });
    }
    res.status(200).json({ message: 'logged in succesfully' });
  } catch (error) {
    console.log(error);
  }
};