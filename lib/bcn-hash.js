var crypto = require("crypto");
var assert = require("assert");

function hashString(data) {
	assert.ok(typeof data  === 'string',
		"hash.hashString(string), invalid argument type " + typeof data);

        var buffer = new Buffer(data);
        return hashBuffer(buffer);
}

function hashBuffer(buffer) {
	var hash = crypto.createHash("sha1");
    hash.update(buffer);
    var sha = hash.digest("base64").replace(hash_regex, hash_regex_function);
    return sha;
}

var hash_regex = /[\/+=]/g;
var hash_regex_function = function(char) {
	if (char==="+") {
		return "-";
	} else if (char==="/") {
		return "_";
	} else if (char==="=") {
		return "";
	} else {
		return char;
	}
}

exports.hashBuffer = hashBuffer;
exports.hashString = hashString;

