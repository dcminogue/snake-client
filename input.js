// Sets up keyboard inputs between client and server.
const setupInput = function (conn) {
    connection = conn
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  };
  
  // Gives instructions to the program when certain keys are pressed.
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }  if (key === 'w') {
        connection.write('Move: up');
      } else if (key === 'a') {
        connection.write('Move: left');
      } else if (key === 's') {
        connection.write('Move: down');
      } else if (key === 'd') {
        connection.write('Move: right');
      } else if (key === 'h') {
        connection.write('Say: I ded');
      } else if (key === 'j') {
        connection.write('Say: That\'s gotta hurt');
      } else if (key === 'k') {
        connection.write('Say: Can\'t stop');
      } else if (key === 'l') {
        connection.write('Say: Trust a snake');
      }
    };

module.exports = { setupInput };