const db = require('../db/dbConnect')
const vehicleDb = require("../model/vehicleSchema");
const seed = require("../seed/vehicleSeed");
var process = require('process');
db.then(async(x)=>{
   await vehicleDb.insertMany(seed);
   console.log("data migrated successfully")
   process.exit(0);
}).catch(err=>{
    console.log(err);
});