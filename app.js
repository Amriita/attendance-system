const express = require("express");
const mongoose = require("mongoose");
const checkinRoutes = require("./src/routes/checkinRoutes");
const checkoutRoutes = require("./src/routes/checkoutRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const app = express();
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://Amrita:-2K6Knp64wivt.N@cluster0.jkomfyn.mongodb.net/instructor_tracking",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://Amrita:-2K6Knp64wivt.N@cluster0.jkomfyn.mongodb.net/instructor_tracking",
    {
      useNewUrlParser: true,
      strictQuery: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(express.json());
app.use("/api/checkin", checkinRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
