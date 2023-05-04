const bookingDb = require("../model/bookingSchema");
const vehicleDb = require("../model/vehicleSchema");
async function bookings(req, res) {
  try {
    const { vehicleId, firstName, lastName, startDate, endDate } = req.body;

    const vehicle = await vehicleDb.findOne({_id:vehicleId});
    if(!vehicle){
     return res.status(200).json({
        msg: "error in bookings",
        error: "Invalid vehicle id",
        success: false,
      })
    }

    const checkStatus = await bookingDb.findOne({
      vehicleId:vehicleId,
      $or: [
        {
          startDate: { $lte: startDate },
          endDate: { $gte: startDate },
        },
        {
          startDate: { $lte: endDate },
          endDate: { $gte: endDate },
        },
      ],
    });

    if (checkStatus) {
      return res.status(400).json({
        msg: "error in bookings",
        error: "Vehicle is already booked for that time period",
        success: false,
      });
    }

    let bookingSave = new bookingDb({
      vehicleId: vehicleId,
      userFirstName: firstName,
      userLastName: lastName,
      startDate: startDate,
      endDate: endDate,
    });

   let saveData = await bookingSave.save();

    return res.status(200).json({
      msg: "Vehicle booked successfully",
      data:{
        bookingId:saveData._id
      },
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      msg: "error in bookings",
      error: `${error}`,
      success: false,
    });
  }
}

async function getbooking(req,res){
  try {
    const id =req.params.id.toString();
    console.log(typeof id)
    const booking = await bookingDb.findOne({_id:id});
    if(booking){
      const vehicle = await vehicleDb.findOne({_id:booking.vehicleId});
      return res.status(200).json({
        msg: "Data fetched successfully",
        data: {
          ...booking.toObject(),
          ...vehicle.toObject()
        },
        success:true
      })
    }else{
      return res.status(200).json({
        msg: "No data found",
        success: false,
        });
    }
  } catch (error) {
    res.status(200).json({
      msg: "error in get bookings",
      error: `${error}`,
      success: false,
      });
  }
}

module.exports = {
  bookings,
  getbooking
};
