import express from 'express';
import { v4 as uuid } from 'uuid';


import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

const update = [
	{
	 PN: "PN_AAAABBB01",
	 SN: "SN_SSSBBB001",
	 version: 1
	},
	{
	 PN: "PN_AAAABBB02",
     SN: "SN_SSSBBB002",
	 version: 2
	},
	{
	 PN: "PN_AAAABBB03",
	 SN: "SN_SSSBBB003",
	 version: 3
	},
	{
	 PN: "PN_AAAABBB04",
     SN: "SN_SSSBBB004",
	 version: 4
	}

]

router.get('/', (req, res) => { 
	//res.send("Welcome to the update API!");

	console.log(update);

	res.send(update);

});


//dc-0805
router.post('/',(req, res) => {
console.log("POST ROUTE REACHED");
	
    const user = req.body;
    users.push(update);
    //users.push({...user, id: uuid()});
    
    console.log(`User [${update.PN}] added to the database.`);
    res.send(`User with the name [${update.PN}] added to the database.`); //dc-

res.send("POST ROUTE REACHED");

});

export default router;
