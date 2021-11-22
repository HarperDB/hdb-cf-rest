'use strict';

const deleteHandler = (request, hdbCore) => {
    request.body = {
        operation: "delete",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        hash_values: [`${request.params.id}`]
    }

    return hdbCore.requestWithoutAuthentication(request)
}

module.exports = deleteHandler;
