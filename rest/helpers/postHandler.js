'use strict'
const postHandler = (request) => {
    request.body = {
        operation: "insert",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body],
    }
}
module.exports = postHandler