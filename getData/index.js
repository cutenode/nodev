module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        body: context.bindings.datajson
    }

    // logging API hits
    const hits = context.bindings.hitsjsonIn
    const functionName = 'data' // this needs to be changed per function
    const functionHits = typeof hits.data === 'number' ? hits.data : 0 // this needs to be changed per function
    const totalhits = hits.total
  
    const additions = {
      [functionName]: functionHits + 1,
      "total": totalhits + 1
    }
  
    context.bindings.hitsjsonOut = Object.assign(hits, additions)
  }