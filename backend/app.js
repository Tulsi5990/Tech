const express = require("express");
const app = express();  
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");
const path =require("path");




if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"backend/config/config.env"});}



// Middleware to handle JSON requests and cookies
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware to handle file uploads with size limits
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit per file
}));

// Import and use routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname,"frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend/build/index.html"))
})

// Middleware for error handling
app.use(errorMiddleware);

module.exports = app;
