import express from "express";
import {
  createBooking,
  getAllBookingsfromUser,
} from "../controllers/BookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings/patients/:patient_id", getAllBookingsfromUser);

export default router;
