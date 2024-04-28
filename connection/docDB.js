const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/doctors')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports =Doctor;