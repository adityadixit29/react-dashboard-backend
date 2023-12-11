import app from "./app.js";
import {connectToDatabase} from "./database/database.js";
connectToDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
});
