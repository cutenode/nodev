module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.res = {
      status: 200,
      body: context.bindings.updatesjson
  }

  // logging API hits
  const hits = context.bindings.hitsjsonIn
  const functionName = 'updates' // this needs to be changed per function
  const functionHits = typeof hits.updates === 'number' ? hits.updates : 0 // this needs to be changed per function
  const totalhits = hits.total

  const additions = {
    [functionName]: functionHits + 1,
    "total": totalhits + 1
  }

  context.bindings.hitsjsonOut = Object.assign(hits, additions)
}
