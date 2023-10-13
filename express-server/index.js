const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/ReactDataSchema');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://haydave47:data@cluster0.y6yzmpx.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/insert', async (req, res) => {
    const name = req.body.name
    const surname = req.body.surname
    const email = req.body.email
    const experience = req.body.experience
    const coverletter = req.body.coverletter
    const role = req.body.role
    console.log(name, surname, role, email, experience, coverletter)
    const formData  =  new User(
        {
            name: name,
            surname: surname,
            email: email,
            experience: experience,
            coverletter: coverletter,
            role: role,
        }
    )
    try {
        await formData.save();
        res.send("Data inserted successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting data.");
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
