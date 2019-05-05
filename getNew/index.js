module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        body: context.bindings.newjson
    }

    // logging API hits
    const hits = context.bindings.hitsjsonIn
    const functionName = 'new' // this needs to be changed per function
    const functionHits = typeof hits.new === 'number' ? hits.new : 0 // this needs to be changed per function
    const totalhits = hits.total
  
    const additions = {
      [functionName]: functionHits + 1,
      "total": totalhits + 1
    }
  
    context.bindings.hitsjsonOut = Object.assign(hits, additions)
}
