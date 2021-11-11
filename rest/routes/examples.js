'use strict';

const customValidation = require('../helpers/example');

module.exports = async (server, { hdbCore, logger }) => {
  // GET ALL DATA
  server.route({
    url: '/:schema/:table/:id',
    method: 'GET',
    handler: (request) => {
      request.body = {
        operation: "search_by_hash",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        hash_values: [`${request.params.id}`],
        get_attributes: ["*"]
      }
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // POST A NEW DATA RECORD
  server.route({
    url: '/:schema/:table',
    method: 'POST',
    // preValidation: hdbCore.preValidation,
    handler: (request) => {
      request.body = {
        operation: "insert",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body],
      }
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // PUT A DATA RECORD
  server.route({
    url: '/:schema/:table/:id',
    method: 'PUT',
    // preValidation: hdbCore.preValidation,
    handler: (request) => {
      // get the object, and determine which values will need to update. no update set to null
      request.body = {
        operation: "update",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body]
      }
      return hdbCore.requestWithoutAuthentication(request);
    }
  });

  // PATCH A DATA RECORD
  server.route({
    url: '/:schema/:table/:id',
    method: 'PATCH',
    // preValidation: hdbCore.preValidation,
    handler: (request) => {
      request.body = {
        operation: "update",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        records: [request.body]
      }
      return hdbCore.requestWithoutAuthentication(request);
    }
  });

  // DELETE A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'DELETE',
    // preValidation: hdbCore.preValidation,
    handler: (request) => {
      request.body = {
        operation: "delete",
        schema: `${request.params.schema}`,
        table: `${request.params.table}`,
        hash_values: [`${request.params.id}`]
      }
      return hdbCore.requestWithoutAuthentication(request);
    }
  });
};
