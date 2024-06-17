const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const authRoutes = require("./src/routes/AuthRoutes");
const merchantRoutes = require("./src/routes/MerchantRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Appointment Booking System API');
});
app.use("/auth", authRoutes)
app.use("/merchant", merchantRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
