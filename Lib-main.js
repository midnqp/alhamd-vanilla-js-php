const fs = require('fs'), 
      path = require('path'),
      util = require('util')


module.exports = {
	fileRead : fileRead,            //reads file in utf8, throws err
	fs : fs,
	path: path,
	print : print,                  //console.log is too long to type
	requireGlobal : requireGlobal,  //adds everything of exported to global scope
}




function fileRead(fileName, callback) {
	fs.readFile(fileName, 'utf8', (err, data)=>{
		if (err) throw err
		callback(data)
	})
}


function print() {
	if (!process.stdout || !util.isFunction(process.stdout.write)) 
		throw new TypeError('Console expects a writable stream instance')
	process.stdout.write(util.format.apply(this, arguments) + '\n')
}


function requireGlobal(moduleName) {
	Object.entries(require(moduleName)).forEach(
		([name, exported]) => global[name] = exported 
	)
}
