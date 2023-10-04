import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const Patient = db.define("patient", {
  patient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default Patient;

// If table "Patient" doesn't exist, this function creates it

// (async () => {
//   await db.sync();
// })();
