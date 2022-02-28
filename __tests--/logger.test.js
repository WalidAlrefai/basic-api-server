'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
let id = 1;

describe('testing clothes routes', () => {
    // can not work withme
    // it('handles my internal server errors', async () => {
    //     const response = await request.get('/food/f'); 
    //     expect(response.status).toEqual(500);
    // });
    // jest.setTimeout(10000)
    it('testing get all clothes', async () => {
        
        const response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    })
    it('post new clothes', async () => {
        const response = await request.post('/clothes').send({
            typs: "test",
            size: 5
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing clothes get by id method', async () => {
        const response = await request.get(`/clothes/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new clothes', async () => {
        const response = await request.put(`/clothes/${id}`).send({
            typs: "test",
            size: 5
        })
        expect(response.status).toEqual(201);
    })
    it('deleting clothes by id', async () => {
        const response = await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(204)
    })
})