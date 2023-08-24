const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
const cors = require("cors");
const multer = require('multer')
const userRouter = require("./routers/user_router")
const companyRouter = require("./routers/company_router")
const companyProjects = require("./routers/company_projects")

// middleware to handle URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handle cors pre-flight requests
app.use(
    cors({
        origin: "*",
    })
);
app.options("*", cors());

// API endpoint routes
app.use("/api/users", userRouter);

// Expense Controller routes
app.use("/api/expense", expenseRouter);

// Expense Controller routes
app.use("/api/income", incomeRouter);

// Travel Expense API endpoint route
app.use('/api/travel', travelRouter)

app.get("/api/test", (req, res) => {
    res.json("server works!");
});

// LISTENER
mongoose
    // .connect(`mongodb://localhost:27017/expense-tracker`)
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB connected");

        // boot up app
        app.listen(port, () => {
            console.log("Expense tracker running on port: ", port);
        });
    })
    .catch((err) => {
        console.log("err when connecting: " + err);
    });