const express = require("express");
const dotenv = require("dotenv");
// const connectDB = require("./config/db");
const colors = require("colors");
// const userRouters = require("./routes/userRoutes");
// const userRouters2 = require("./routes/userRoutes2");
// const { notFound, errorHandler } = require("./middleware/errorMiddleWare");
dotenv.config();
// connectDB();

const app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json());

// app.use("/api/user", userRouters);
// app.use(notFound);
// app.use(errorHandler);

app.get('/', (req, res) => {
    console.log("Hlelo");
    res.json("hello world");
})
// const port = process.env.PORT || 5000;
app.listen(8000);
