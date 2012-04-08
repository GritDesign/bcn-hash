var bcnHash = require("..");
var assert = require("assert");

var cases = require("./test_cases.js").cases;

for (var i=0; i<cases.length; i++) {
    var hash = bcnHash.hashObject(cases[i][0]);
    var hash2 = bcnHash.hashObjectBrowser(cases[i][0]);
    console.log(hash);
    console.log(hash2);
}
