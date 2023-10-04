import express from "express";
import {
  signUpPatient,
  findAllPatients,
  loginPatient,
} from "../controllers/PatientController.js";

const router = express.Router();

router.post("/patients", signUpPatient);
router.get("/patients", findAllPatients);
router.get("/patient", loginPatient);

export default router;
