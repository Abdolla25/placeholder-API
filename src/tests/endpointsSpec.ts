import supertest from 'supertest';
import { app } from '..';

const newRequest = supertest(app);

describe('endpoint testing', () => {
    it('index page call check', async () => {
        const getResponse = await newRequest.get('/');
        expect(getResponse.status).toBe(200);
    });
    it('api page call check', async () => {
        const getResponse = await newRequest.get('/api');
        expect(getResponse.status).toBe(200);
    });
});

describe('query testing', () => {
    it('request query with name: egy and full data check', async () => {
        const expLink = '/api/images?filename=eg&width=200&height=100';
        const getResponse = await newRequest.get(expLink);
        expect(getResponse.status).toBe(200);
    });
});
