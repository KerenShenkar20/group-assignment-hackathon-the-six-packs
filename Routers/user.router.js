const { Router } = require('express');
const {getUsers,userAdd} = require('../Controllers/user.ctrl');


const userRouter = new Router();

userRouter.get('/',getUsers); 
// userRouter.get('/filter',userController.filterUsers); 
// userRouter.get('/:id',userController.getUser);
userRouter.post('/',userAdd); 
// userRouter.put('/:id',userController.updateUser); 
// userRouter.delete('/:id',userController.deleteUser);

module.exports = { userRouter };
