// import express from 'express';
// import { controller, controller1 } from '../controller/user.js';
// const router = express.Router();
// router.get('/', controller);
// router.get('/api', controller1);

// export default router;


// import express from 'express';
// import {signup, getUser} from '../controller/user.js'
// const router = express.Router();

// router.post('/api', signup);
// router.get('/:username',getUser);

// export default router;







import express from 'express';
import {SignUp, SignIn} from '../controller/user.js';

const router = express.Router();
router.use(express.json());

router.post('/signup', SignUp);
router.get('/signin', SignIn);

export default router;







