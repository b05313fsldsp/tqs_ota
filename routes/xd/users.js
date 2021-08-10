import express from 'express';
import { v4 as uuid } from 'uuid';


import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

const users = [
	{
	 firstName: "John",
	 lastName: "Chang",
	 age: 25
	},
	{
	 firstName: "Tim",
	 lastName: "Wu",
	 age: 31
	},
	{
	 firstName: "Adam",
	 lastName: "Zoom",
	 age: 95
	},

]

router.get('/', (req, res) => { 
	//res.send("Welcome to the Users API!");

	console.log(users);

	res.send(users);
});


//dc-0805
router.post('/',(req, res) => {
console.log("POST ROUTE REACHED");
	
    const user = req.body;
    users.push(user);
    //users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
    res.send(`User with the name [${user.username}] added to the database.`); //dc-

res.send("POST ROUTE REACHED");

});

//router.post('/', createUser);


//
/*
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);
*/
//






export default router;
