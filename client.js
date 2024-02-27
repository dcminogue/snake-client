const net = require('net');
const { IP, PORT } = require('./constants');
// Create a connect function that connects the client to the server.
const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
  
    // Bring in response from the server.
    conn.on('data', (data) => {
      console.log('Server Says', data)
    });

    // Sends message to the server upon connection.
    conn.on('connect', () => {
            conn.write('Successfully connected to game server.');
            conn.write('Name: BHB');  
    });
    
   conn.setEncoding('utf8');
    return conn;
  };

module.exports = { connect };