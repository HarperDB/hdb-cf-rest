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

  // PUT A DATA RECORD WITH ID ROUTE PARAM.
  server.route({
    url: '/:schema/:table/:id',
    method: 'PUT',
    // preValidation: hdbCore.preValidation,
    handler: async (request) => {
        const patch_query_body = request.body
        const get_table_query = {
          body: {
            operation: "describe_table",
            schema: `${request.params.schema}`,
            table: `${request.params.table}`,
          }
        }
      // get the table
        const table = await hdbCore.requestWithoutAuthentication(get_table_query)
      // initialize and assign variable for the hash_attribute, or primary key
        const hash_attr = table.hash_attribute

      // iterate table to capture attribute names
        for (let i = 0; i < table.attributes.length; i++) {
          const attribute_name = table.attributes[i].attribute

      // skip over these attributes
          if (attribute_name === '__createdtime__' || attribute_name === '__updatedtime__') {
            continue;
          }
      // if there's no data in current attribute, assign a null value
          if (patch_query_body[attribute_name] === undefined) {
            patch_query_body[attribute_name] = null;
          }
        }

      // assign id route param to the request.body's hash_attribute value
      patch_query_body[hash_attr] = request.params.id

      // send the new record object
        const update_query = {
            operation: "update",
            schema: `${request.params.schema}`,
            table: `${request.params.table}`,
            records: [ patch_query_body ]
        }
        request.body = update_query

      return hdbCore.requestWithoutAuthentication(request);
      }
  });

  // PATCH A DATA RECORD WITH ID ROUTE PARAM
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
