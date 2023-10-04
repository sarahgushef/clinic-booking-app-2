import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const Booking = db.define("booking", {
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  doctor: {
    type: DataTypes.STRING,
  },
  appointment_time: {
    type: DataTypes.DATE,
  },
  patient_id: {
    type: DataTypes.INTEGER,
  },
});

export default Booking;

// If table "Booking" doesn't exist, this function creates it

// (async () => {
//   await db.sync();
// })();
