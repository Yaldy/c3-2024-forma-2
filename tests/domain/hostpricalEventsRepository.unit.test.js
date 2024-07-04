import eventsRepository from '../../src/domain/historical_events/repository/historicalEventsRepository.js'
import eventsDataAC from '../../dataset/historical_data-ac.json'
import eventsDataDC from '../../dataset/historical_data_dc.json'
import eventosJSON from "../../dataset/historical_data.json";

/*
* NOTA
* Para verificar que la salida esté bien, se crean dos archivo, uno con las fechas ac y otro con las dc
* Los eventos de estos archivos por separado se utilizan para cada caso mensionado
*
* Se asume por inspección simple que el archivo de datos está ordenado de la fecha más antigua a la más reciente
*
* */
describe('Test historicalEventsRepository', () => {

    test('Debe entregar todas las fechas ac',async() =>{
        const events = eventsRepository.getHistoricalEvents('ac')
        const len = eventsDataAC.result.events.length
        expect(events.length).toBe(len)
        expect(events).toEqual(eventsDataAC.result.events)
    })

    test('Debe entregar todas las fechas dc',async() =>{
        const events = eventsRepository.getHistoricalEvents('dc')
        const len = eventsDataDC.result.events.length
        expect(events.length).toBe(len)
        expect(events).toEqual(eventsDataDC.result.events)
    })

    test('Debe entregar todas las fechas ac',async() =>{
        const events = eventsRepository.getHistoricalEvents('Ac')
        const len = eventsDataAC.result.events.length
        expect(events.length).toBe(len)
        expect(events).toEqual(eventsDataAC.result.events)
    })

    test('Debe entregar todas las fechas dc',async() =>{
        const events = eventsRepository.getHistoricalEvents('dC')
        const len = eventsDataDC.result.events.length
        expect(events.length).toBe(len)
        expect(events).toEqual(eventsDataDC.result.events)
    })

})