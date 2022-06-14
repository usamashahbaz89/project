import mongoose from 'mongoose';

const datasignup = mongoose.Schema({
email: String,
password: String,
});

const dataModelsignup = mongoose.model('Participator', datasignup);

export default dataModelsignup;