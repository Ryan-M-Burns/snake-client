const net = require('net');

const connect = function() {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541

  });

  conn.setEncoding('utf-8');
  
  conn.on("connect", (data) => {
    console.log(`Hello, this is Stacy the computer.\nGood morning, Simon, I trust you slept well.\nWill you be searching for true love today?`);
  
  });
  
  conn.on('data', (data) => {
    console.log(`incoming data: ${data}`);
  });
  
  return conn;
};


console.log("Connecting...");
connect();
