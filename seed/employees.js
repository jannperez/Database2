const db = require('../db')
const employee = require('../models/employee')
const address = require('../models/address')

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

const main = async () => {
   const usersEmployee = [
    _id: ObjectId("5e417175c82e0bd7af0f2f04"),
    first_name: "Ines",
    last_name: "Santiago",
    email: "Ines Santiago@BOWL.com",
    job_title: "Scientist",
    address: {
        street: "13 St",
        city: "Tacoma",
        state: "WA",
        zip: "98001"

        _id: ObjectId("5e417175c82e0bd7af0f2f04"),
        first_name: "Martha",
        last_name: "May",
        email: "MarthaMay@BOWL.com",
        job_title: "Manager",
        address: {
            street: "463",
            city: "Jersey City",
            state: "NJ",
            zip: "07306"
        
            _id: ObjectId("5e417175c82e0bd7af0f2f04"),
            first_name: "Luis",
            last_name: "Jose",
            email: "Luis Jose@BOWL.com",
            job_title: "Supervisor",
            address: {
                street: "13 st",
                city: "New Rain",
                state: "NY",
                zip: "10010" 
            
        
           id: ObjectId("5e417175c82e0bd7af0f2f04"),
            first_name: "Constantine",
            last_name: "Lopez",
            email: "CLopez@BOWL.com",
            job_title: "SScientist",
            address: {
            street: "93 Reservoir",
            city: "Jersey City",
            state: "NJ",
             zip: "07307" 

             _id: ObjectId("5e417175c82e0bd7af0f2f04"),
             first_name: "Aaron",
             last_name: "Luna",
             email: "AaaronLuna@BOWL.com",
             job_title: "Main Scientist",
             address: {
                 street: "6th Ave",
                 city: "Passaic",
                 state: "NJ",
                 zip: "90120"
   ]
}