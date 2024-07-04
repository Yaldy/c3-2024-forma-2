import eventosJSON from '../../../../dataset/historical_data.json'

/*
* NOTA
* Se tuvo que modificar el filtar, ya que las fechas con formato xx/xx/xx no eran
* tomadas en cuenta para la comparación
*
* Se agrega el caso cuando date=0
* */

/*Función para ordenar por fecha*/
function compareByDate(a, b) {
    if (Number(a.date.split('/')[0] )<Number( b.date.split('/')[0]) ){
        return -1;
    }
    if (Number(a.date.split('/')[0]) > Number(b.date.split('/')[0]) ){
        return 1;
    }
    return 0;
}

exports.getHistoricalEvents = (ocurrence) => {
    ocurrence=ocurrence.toLowerCase()
    let filtered_events = []
    if (ocurrence == 'ac'){
        filtered_events = eventosJSON.result.events.filter((evn) => evn.date.split('/')[0] <= 0)
    } else if(ocurrence =='dc'){
        filtered_events = eventosJSON.result.events.filter((evn) => evn.date.split('/')[0]  > 0)
    }
    filtered_events.sort(compareByDate)
    return filtered_events
}