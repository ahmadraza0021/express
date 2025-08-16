// import express from 'express';
// import userRouter from './routes/user.js';
// import dotenv from 'dotenv';
// const app = express();
// app.use(express.json());
// dotenv.config();

// console.log(process.env.SECRET);

// //middleWare
// const loggerMiddleWare = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
// next(); 
// };
// app.use(loggerMiddleWare);

// app.use('/', userRouter);
// //app.use('/api', userRouter);

// // //router1
// // app.get('/', controller);
// // //router2
// // app.get('/api/:id/v1/:ty', controller2);

// app.listen(3000, () => {
  //   //this callback function is made to verify if server is working/connected or not
  //   console.log('Server connected..!');
  // });
  
  // //http://localhost:3000/
  
  
  
//   import express from 'express';
//   import mongoose from 'mongoose';
//   import userRouter from './routes/user.js'
//   import dotenv from 'dotenv';
//   dotenv.config();
//   // when direct controller use in index.js without making router file
//   // import {controller} from './controller/user.js'
//   const app = express();
//   app.use(express.json());
  
// //   //MiddleWare
// //   const loggerMiddleWare = (req, res, next) =>{
// //     console.log(`&{req.method} &{req.url}`)
// //     next();
// // };
// // app.use(loggerMiddleWare);

// //Direct Method
// //router
// // app.get('/', (req, res) => {
//   //   res.json({
//     //     message: 'Hi my self Ahmad'
//     //   });
//     // });
//     //only through controller component
//     // app.get('/api', controller );
    
//     //component base method
//     app.use('/api', userRouter);

// const port = process.env.PORT;
// app.listen(port, async() =>{
//   await mongoose.connect(process.env.MONGO_URL);
//   console.log('connected to database(db)');
//   console.log(`Server listening at http://localhost:${port}`)
// });

// // app.listen(3000, () => {
// //   console.log('Server Connected');
// //});



import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


app.use('/api', userRouter);

const port = process.env.PORT;
app.listen(port, async() =>{
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Database Connected');
  console.log(`Server is listening at http://localhost:${port}`);    //http://localhost:3000/api/signup
});

// mongoose.connect(process.env.MONGO_URL)
// .then(()=>{
//   console.log("Database Connected Successfully")
//   app.listen(port, ()=>{
//     console.log(`Server is running at port ${port}`)
//   })
// }).catch((err)=>{
//   console.error(err);
// });