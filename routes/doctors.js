const express = require('express');
const router = new express.Router();
const Doctor = require("../connection/docDB");


router.post("/doctors", async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        const result = await doctor.save();
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

router.get("/doctors", async (req, res) => {
    try {
        const result = await Doctor.find(req.body);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }

})

router.get("/doctors/:id", async (req, res) => {
    try {
        const result = await Doctor.findById(req.params.id);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
});

router.patch("/doctors/:id", async (req, res) => {
    try {
        const result = await Doctor.findByIdAndUpdate(req.params.id, req.body);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
});

router.delete("/doctors/:id", async (req, res) => {
    try {
        const result = await Doctor.findByIdAndDelete(req.params.id);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
});

module.exports = router;