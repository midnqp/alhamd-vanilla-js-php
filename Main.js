const lib = require("./lib-frameworkless.js")
require('http').createServer(server).listen(7777)

function server(req, res) {

	// redirecting certain requests
	// to be responded from a 
	// seperate dir.
	
	ROUTE_REDIRECT = {
		// req.url     : target's parent directory
		'/favicon.ico' : './Public/Comp/',
	}


	lib.Init({
		'res' : res,
		'req' : req,
		'viewdir' : './Public',
		'compdir' : './Public/Comp',
	})
	
	lib.Route(req, res)
}
