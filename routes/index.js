'use strict';

const getHandler = require('../helpers/getHandler');
const getAllHandler = require('../helpers/getAllHandler');
const postHandler = require('../helpers/postHandler');
const putHandler = require('../helpers/putHandler');
const patchHandler = require('../helpers/patchHandler');
const deleteHandler = require('../helpers/deleteHandler');

module.exports = async (server, { hdbCore, logger }) => {
  // GET A DATA RECORD
  server.route({
    url: '/:schema/:table/:id',
    method: 'GET',
    handler: (request) => getHandler(request, hdbCore),
  });

  // GET ALL DATA RECORDS
  server.route({
    url: '/:schema/:table',
    method: 'GET',
    handler: (request) => getAllHandler(request, hdbCore),
  });

  // POST A NEW DATA RECORD
  server.route({
    url: '/:schema/:table',
    method: 'POST',
    handler: (request) => postHandler(request, hdbCore),
  });

  // PUT A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'PUT',
    handler: (request) => putHandler(request, hdbCore),
  });

  // PATCH A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'PATCH',
    handler: (request) => patchHandler(request, hdbCore),
  });

  // DELETE A DATA RECORD WITH ID ROUTE PARAM
  server.route({
    url: '/:schema/:table/:id',
    method: 'DELETE',
    handler: (request) => deleteHandler(request, hdbCore),
  });
};
