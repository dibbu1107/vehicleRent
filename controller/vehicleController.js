const vehicleDb = require("../model/vehicleSchema");

async function getWheels(req, res) {
  try {
    const listOfWheels = await vehicleDb.distinct("wheels");
    return res.status(200).json({
      msg: "Data fetched successfully",
      data: listOfWheels,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "error in get wheels",
      error: `${error}`,
      success: false,
    });
  }
}

async function getVehiclesType(req, res) {
  try {
    const wheel = req.params.wheel;
    const listOfVehiclesType = await vehicleDb.find({ wheels: wheel }, [
      "type",
    ]);
    return res.status(200).json({
      msg: "Data fetched successfully",
      data: listOfVehiclesType,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "error in get wheels",
      error: `${error}`,
      success: false,
    });
  }
}

async function getVehicles(req, res) {
  try {
    const { type, wheel } = req.params;
    const listOfVehicles = await vehicleDb.find({ type: type, wheels: wheel });
    return res.status(200).json({
      msg: "Data fetched successfully",
      data: listOfVehicles,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "error in get wheels",
      error: `${error}`,
      success: false,
    });
  }
}

module.exports = {
  getWheels,
  getVehiclesType,
  getVehicles,
};
