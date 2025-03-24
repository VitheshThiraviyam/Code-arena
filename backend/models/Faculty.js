const mongoose = require('mongoose');
const studentschema = new mongoose.Schema({
    name:{type: String, required: true},
    staffid:{type: String, required: true},
})
const Faculty = mongoose.model("student",studentschema);
module.exports = Faculty;