'use strict';

const patchHandler = (request, hdbCore) => {
    request.body = {
        operation: "update",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body]
    }

    return hdbCore.requestWithoutAuthentication(request);
}

module.exports = patchHandler;
