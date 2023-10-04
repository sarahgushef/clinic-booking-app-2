import db from "../config/Database.js";
import Booking from "../models/BookingModel.js";
import Patient from "../models/PatientModel.js";

export const createBooking = async (req, res) => {
  try {
    await Booking.create(req.body);
    res.status(201).json({ msg: "Booking created" });
  } catch (error) {
    res.send(error.message);
  }
};

export const getAllBookingsfromUser = async (req, res) => {
  try {
    // ========= OPTION 1

    // const bookings = await Booking.findOne({
    //   where: { patient_id: req.params.patient_id },
    // });

    // const user = await Patient.findOne({
    //   where: { patient_id: req.params.patient_id },
    // });

    // const bookingsAndUser = { bookings: bookings, user: user };

    // ======= OPTION 2
    const bookings = await db.query(
      `SELECT * FROM bookings JOIN patients ON patients.patient_id = bookings.patient_id WHERE patients.patient_id = ${req.params.patient_id}`
    );

    const bookingsAndUser = { bookings: bookings[0] };

    res.status(200).json(bookingsAndUser);
  } catch (error) {
    res.send(error.message);
  }
};
