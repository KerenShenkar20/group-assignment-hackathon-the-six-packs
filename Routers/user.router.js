const { Router } = require('express');
const {userController} = require('../Controllers/user.ctrl');


const userRouter = new Router();

userRouter.get('/',userController.getUsers); 
// userRouter.get('/filter',userController.filterUsers); 
// userRouter.get('/:id',userController.getUser);
// userRouter.post('/',userAdd); 
// userRouter.put('/:id',userController.updateUser); 
// userRouter.delete('/:id',userController.deleteUser);

module.exports = { userRouter };
