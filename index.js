//import express from 'express';
import express from "express";
import bodyParser from "body-parser";

import updateRoutes from "./routes/update.js";
//import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//
    //xd-app.use("/update", update_info);
//

//app.use("/users", usersRoutes);
app.use("/update", updateRoutes);   //dc-

app.get("/",(req, res) => {
    console.log("[TEST]");
    res.send("hello ~ welcome to the Debug Server homepage"); });

app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));


app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
