let connection;
const { ENCODING,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  SAYING_ONE_KEY,
  SAYING_TWO_KEY,
  KILL_COMMAND } = require('./constants');

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};
const handleUserInput = function(key) {
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === KILL_COMMAND) {
    process.exit();
  }
  if (key === SAYING_ONE_KEY) {
    connection.write("Say: Do a barrel roll!");
  }
  if (key === SAYING_TWO_KEY) {
    connection.write("Say: I identify as a mouse");
  }

};

module.exports = { setupInput };