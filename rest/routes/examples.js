'use strict';

const getHandler = require('../helpers/getHandler');
const postHandler = require('../helpers/postHandler');
const putHandler = require('../helpers/putHandler');
const patchHandler = require('../helpers/patchHandler');
const deleteHandler = require('../helpers/deleteHandler');

module.exports = async (server, { hdbCore, logger }) => {
  // GET A DATA RECORD
  server.route({
    url: '/:schema/:table/:id',
    method: 'GET',
    handler: (request) => {
      getHandler(request)
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // POST A NEW DATA RECORD
  server.route({
    url: '/:schema/:table',
    method: 'POST',
    handler: (request) => {
      postHandler(request)
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // PUT A DATA RECORD WITH ID ROUTE PARAM. **not in working order with handler outside of this files
  server.route({
    url: '/:schema/:table/:id',
    method: 'PUT',
    handler: (request) => {
      putHandler(request)
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // PATCH A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'PATCH',
    handler: (request) => {
      patchHandler(request)
      return hdbCore.requestWithoutAuthentication(request)
    }
  });

  // DELETE A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'DELETE',
    handler: (request) => {
      deleteHandler(request)
      return hdbCore.requestWithoutAuthentication(request)
    }
  });
};
