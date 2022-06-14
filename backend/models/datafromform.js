import mongoose from 'mongoose';

const data = mongoose.Schema({
firstName: String,
lastName: String,
email: String,
});

const dataModel = mongoose.model('Participator', data);

export default dataModel;
