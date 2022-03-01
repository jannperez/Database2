const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema(
{
    first_name: { type: String, required: true},
    last_name: {type: Number, required: true},
    email: {type: String, required: true},
    job_title: {type: String, required: true},
},
{timestamps: true},//any edit, the timestamp will be added
)

module.exports = mongoose.model('usersemployee', usersEmployee)