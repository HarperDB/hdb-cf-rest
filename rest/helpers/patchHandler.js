'use strict'
const patchHandler = (request) => {
    request.body = {
        operation: "update",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body]
    }
}

module.exports = patchHandler