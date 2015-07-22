var argv = require('argv');

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

/*
function sh(cmd, callback) {
    var command = spawn(cmd);
    var result = '';
    command.stdout.on('data', function(data) {
      result += ( ''+data );
      console.log(data.toString());
    });
    command.on('error', function(data) {
      return callback(''+data);
    });
    command.on('close', function(code) {
      return callback(result);
    });
}
*/

/* ==============================

function _sh(command, callback){
  return exec(command, function(err,stdout,stderr){
    console.log(command);
    if(err != null){
      console.log(command);
    }

    var ret = {command:command ,err:err, stdout:stdout, stderr:stderr};
    if(callback != null){
      callback(ret);
    }
  });
}

function sh(command){
  return _sh(command,null);
}

============================== */

argv.option({
	name: 'mode',
	short: 'm',
	type : 'string',
	description :'select mode: commit | push'
});

console.log(argv.run());
