const net = require('net');
const {IP, PORT, ENCODING} = require('./constants');
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    console.log(`Hello, this is Stacy the computer.\nGood morning, Simon, I trust you slept well.\nWill you be searching for true love today?`);
    conn.write('Name: RMB');
  });


  conn.on('data', (data) => {
    console.log(`incoming data: ${data}`);
  });

  return conn;
};

module.exports = { connect };