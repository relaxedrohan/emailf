// figurre out what set of credentials to return

if(process.env.NODE_ENV ==='production'){
	// we are in production mode
	module.exports = require('./prod');
} else{
	//we are in development mode, return dev keys
	module.exports = require('./dev');
}