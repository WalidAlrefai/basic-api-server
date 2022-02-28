'use strict';

const express = require('express');
const {Food} = require('../models/index');
const router = express.Router();


// Routes
router.get('/food',getFood);
router.post('/food',createFood);
router.get('/food/:id',getOneFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood)


// localhost:3000/food
async function getFood(req,res) {
    let allFood = await Food.findAll();
    res.status(200).json(allFood);
}

async function createFood(req,res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}

async function getOneFood(req,res) {
    let id = parseInt(req.params.id);
    let food = await Food.findOne({where:{id:id}})
    res.json(food);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundFood = await Food.findOne({ where: { id: id } });
    let updatedFood = await foundFood.update(obj);
    res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    const deletedFood = await Food.destroy({ where: { id } });
    res.status(204).json(deletedFood);
}

module.exports = router;