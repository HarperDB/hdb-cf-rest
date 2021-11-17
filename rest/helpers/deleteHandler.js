'use strict'
const deleteHandler = (request) => {
    request.body = {
        operation: "delete",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        hash_values: [`${request.params.id}`]
    }
}

module.exports = deleteHandler