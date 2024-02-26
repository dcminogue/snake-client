const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: "localhost",
      port: 50541,
    });
  
    
    conn.on("data", (data) => {
      // code that does something when the connection is first established
      console.log("Server Says", data)
    });

    conn.on("connect", () => {
            conn.write("Successfully connected to game server.");
            conn.write("Name: BHB");

            // setTimeout(() => {conn.write( "Move: up")}, 1000);
            // setTimeout(() => {conn.write( "Move: up")}, 1500);
            // setTimeout(() => {conn.write( "Move: down")}, 1800);
            // setTimeout(() => {conn.write( "Move: up")}, 2000);
            
            
    });
    
    // interpret incoming data as text
    conn.setEncoding("utf8");
    return conn;
  };


  module.exports = { connect };