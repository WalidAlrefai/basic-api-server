'use strict';

const express = require('express');
const {Clothes} = require('../models/index');
const router = express.Router();


router.get('/clothes',getClothes);
router.post('/clothes',createClothes);
router.get('/clothes/:id',getOneClothes);
router.put('/clothes/:id',updateClothe);
router.delete('/clothes/:id',deleteClothe)

// localhost:3000/clothes
async function getClothes(req,res) {
    let allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
}


async function createClothes(req,res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}


async function getOneClothes(req,res) {
    let id = parseInt(req.params.id);
    let clothes = await Clothes.findOne({where:{id:id}})
    res.json(clothes);
}

async function updateClothe(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundClothe = await Clothes.findOne({ where: { id: id } });
    let updatedClothe = await foundClothe.update(obj);
    res.status(201).json(updatedClothe);
}

async function deleteClothe(req, res) {
    const id = parseInt(req.params.id);
    const deletedClothe = await Clothes.destroy({ where: { id } });
    res.status(204).json(deletedClothe);
}


module.exports = router;