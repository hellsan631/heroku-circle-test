var path = require('path');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get('/', function(req, res) {
    var staticPath = path.resolve(__dirname + '/../../client');

    res.sendFile(staticPath + '/index.html');
  });

  server.use(router);
};
