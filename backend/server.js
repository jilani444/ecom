const app = require('./app');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary')
const connectDataBase = require("./database.js")

//Config 
dotenv.config({ path: "backend/config/config.env" });

//connection to the database


//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

connectDataBase()

//Handling Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server");
  process.exit(1)
})


app.listen(process.env.BASE_URL,(err) => {

  console.log(`Server is running on url ${process.env.BASE_URL || 6000}`)
})

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  process.exit(1)
});