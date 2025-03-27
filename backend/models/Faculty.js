const mongoose = require('mongoose');
const facultyschema = new mongoose.Schema({
    name:{type: String, required: true},
    staffid:{type: String, required: true},
    password:{type: String, requied: true}
})
const Faculty = mongoose.model("faculty",facultyschema);
module.exports = Faculty;