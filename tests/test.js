var hash = require("..");
var assert = require("assert");
var stringify = require("bcn-stringify").stringify;

var cases = require("./test_cases.js").cases;

for (var i=0; i<cases.length; i++) {
    var json = stringify(cases[i][0]); 
    var id = h.hashString(json);
    console.log(id);
}
