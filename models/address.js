const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Adress = new Schema(
    {
       address: {type: String, required: true },
       street: {type: String, required: true},
       city: {type: String, required: true},
       state: {type: String, required: true},
       zip: {type: String, required: true}

    }
)

module.exports = mongoose.model('usersEmployee', usersEmployee)