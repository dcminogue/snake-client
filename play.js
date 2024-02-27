const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
 
// Runs the connection to the server.
setupInput(connect());
