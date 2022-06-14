import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import route from './routes/routes.js';

const app=express();

const url="mongodb+srv://usamashahbaz890:88888888Us@usama.8ndzi.mongodb.net/pcgamingbuilds?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then (()=> console.log("Connected to the Database."));

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/pcgamingbuilds', route);
app.use('/applicantslist', route);
app.use('/applicantslist/delete', route);


