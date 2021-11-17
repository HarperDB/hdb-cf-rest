'use strict';

const getHandler = (request, hdbCore) => {
    request.body = {
        operation: "search_by_hash",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        hash_values: [`${request.params.id}`],
        get_attributes: ["*"]
    }

    return hdbCore.requestWithoutAuthentication(request);
}

module.exports = getHandler;
