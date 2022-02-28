'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
let id;

// const jest = require('jest')
// jest.useRealTimers();

describe('Testing 404', () => {
    it('testing/clothes', async () => {
        const response = await request.get('/wrongPath');
        expect(response.status).toEqual(404);
    });
    it('testing bad method', async () => {
        const response = await request.put('/food');
        expect(response.status).toEqual(404);
    });
});
describe('testing food routes', () => {
    
    it('testing get all food', async () => {
        const response = await request.get('/food')
        console.log(response);
        expect(response.status).toEqual(200)
        
    })
    it('post new food', async () => {
        const response = await request.post('/food').send({
            name: "test",
            price: 5
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
    it('testing food get by id method', async () => {
        const response = await request.get(`/food/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new food', async () => {
        const response = await request.put(`/food/${id}`).send({
            name: "test",
            price: 0
        })
        expect(response.status).toEqual(201);
    });
    it('deleting food by id', async () => {
        const response = await request.delete(`/food/${id}`)
        expect(response.status).toEqual(204);
    })
})