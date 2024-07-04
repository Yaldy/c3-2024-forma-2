import request from 'supertest'
import { server, app } from '../../src/index'
import eventsDataAC from '../../dataset/historical_data-ac.json'
import eventsDataDC from '../../dataset/historical_data_dc.json'
describe('GET /api/history/:ocurrence', () => {
    afterAll(() => {
        server.close()
    })

    test('Devolver eventsDataAC cuando input es ac', async () => {
        const response = await request(app.callback()).get('/api/history/ac')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataAC.result.events)
    })

    test('Devolver eventsDataDC cuando input es dc', async () => {
        const response = await request(app.callback()).get('/api/history/dc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataDC.result.events)
    })

    test('Devolver cuando input es AC', async () => {
        const response = await request(app.callback()).get('/api/history/AC')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataAC.result.events)
    })

    test('Devolver cuando input es DC', async () => {
        const response = await request(app.callback()).get('/api/history/DC')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataDC.result.events)
    })

    test('Devolver cuando input es Ac', async () => {
        const response = await request(app.callback()).get('/api/history/Ac')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataAC.result.events)
    })

    test('Devolver cuando input es Dc', async () => {
        const response = await request(app.callback()).get('/api/history/Dc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataDC.result.events)
    })

    test('Devolver cuando input es aC', async () => {
        const response = await request(app.callback()).get('/api/history/aC')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataAC.result.events)
    })

    test('Devolver cuando input es dC', async () => {
        const response = await request(app.callback()).get('/api/history/dC')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(eventsDataDC.result.events)
    })

    test('Devolver mensaje cuando input es d1', async () => {
        const response = await request(app.callback()).get('/api/history/d1')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({"message": "Solo se aceptan caracteres no numéricos"})
    })
    test('Devolver mensaje cuando input es 21', async () => {
        const response = await request(app.callback()).get('/api/history/21')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({"message": "Solo se aceptan caracteres no numéricos"})
    })

    test('Devolver mensaje cuando input es dca', async () => {
        const response = await request(app.callback()).get('/api/history/dca')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({"message": "El input debe ser ac o dc"})
    })
    test('Devolver mensaje cuando input es d', async () => {
        const response = await request(app.callback()).get('/api/history/d')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({"message": "El input debe ser ac o dc"})
    })


})