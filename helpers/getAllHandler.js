'use strict';

const getHandler = (request, hdbCore) => {
    request.body = {
        operation: "sql",
        sql: `SELECT * FROM \`${request.params.schema}\`.\`${request.params.table}\``,
    }

    return hdbCore.requestWithoutAuthentication(request);
}

module.exports = getHandler;
