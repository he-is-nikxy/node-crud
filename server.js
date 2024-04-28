// const Doctor = require("./connection/docDB");
const express = require("express");
const doctorData = require("./routes/doctors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(doctorData);

app.get("/", (req, res) => {
    res.send("Welcome to the Doctor's Portal");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
