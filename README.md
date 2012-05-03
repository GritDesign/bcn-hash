
# Bacon Hash function

Provides basic hashing for use in bacon.

This library is intended to be used from within node programs
as well as being included in the web client by using browserify.


## Installation

```
npm install bcn-hash
```

## Usage

```
var hash = require("bcn-hash");

var id1 = hash.hashString("test");
var id2 = hash.hashBuffer(new Buffer("test"));

// id1 -> qUqP5cyxm6YcTAhz05Hph5gvu9M 
// id2 -> qUqP5cyxm6YcTAhz05Hph5gvu9M
```
