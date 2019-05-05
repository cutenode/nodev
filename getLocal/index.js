module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        body: context.bindings.localjson
    }

    // logging API hits
    const hits = context.bindings.hitsjsonIn
    const functionName = 'local' // this needs to be changed per function
    const functionHits = typeof hits.local === 'number' ? hits.local : 0 // this needs to be changed per function
    const totalhits = hits.total
  
    const additions = {
      [functionName]: functionHits + 1,
      "total": totalhits + 1
    }
  
    context.bindings.hitsjsonOut = Object.assign(hits, additions)
}
