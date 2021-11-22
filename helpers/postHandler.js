'use strict';

const postHandler = (request, hdbCore) => {
    request.body = {
        operation: "insert",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body],
    }

    return hdbCore.requestWithoutAuthentication(request);
}

module.exports = postHandler;
