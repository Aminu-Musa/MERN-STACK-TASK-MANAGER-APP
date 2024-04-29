const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const Task = require("./Models/task.model");
const taskRoutes = require("./Routes/task.route")



const app = express();
// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks",taskRoutes)



const PORT = process.env.PORT || 5000;
const runServer = async () => {
  try { 
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
    
  } catch (err) {
    console.log(err);
  }
};

runServer();
