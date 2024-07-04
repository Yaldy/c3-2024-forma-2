import historicalEventsRepository from '../repository/historicalEventsRepository'

exports.getHistoricalEventsByOcurrence = (ctx) => {
    const ac_dc = ctx.params.ocurrence
    const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    if(!isAlpha(ac_dc)){
        ctx.status = 400
        ctx.body = {"message": "Solo se aceptan caracteres no numéricos"}
        return ctx.body
    }
    if(ac_dc.length!=2){
        ctx.status = 400
        ctx.body = {"message": "El input debe ser ac o dc"}
        return ctx.body
    }
    if(ac_dc.toLowerCase()!='ac'&&ac_dc.toLowerCase()!='dc'){
        ctx.status = 400
        ctx.body = {"message": "El input debe ser ac o dc"}
        return ctx.body
    }

    ctx.body = historicalEventsRepository.getHistoricalEvents(ctx.params.ocurrence)
    return ctx
}