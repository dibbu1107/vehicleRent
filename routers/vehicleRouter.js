const express = require("express");
const vehicle = require('../controller/vehicleController');
const booking = require('../controller/bookingController');
const validateBody = require("../middleware/validateBody");

const router = express.Router();

router.get('/wheels',vehicle.getWheels);
router.get('/type/:wheel',vehicle.getVehiclesType);
router.get('/model/:wheel/:type',vehicle.getVehicles);
router.post('/booking',validateBody,booking.bookings);
router.get('/booking/:id',booking.getbooking);


module.exports = router;
