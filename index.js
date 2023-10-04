import "dotenv/config.js";
import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import PatientRoute from "./routes/PatientRoute.js";
import BookingRoute from "./routes/BookingRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Hello World Guys");
});

app.use(PatientRoute);
app.use(BookingRoute);

// db.sync() is for synchronize all models at once

db.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });
