
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
var hashObject = require("bcn-hash").hashObject;

var hash = hashObject(object);

hash[0]   // (the hash eg "MFzAV3Dr59jPFDmsXKv6fj6TX5E"
hash[1]   // the stringified object data, (what the hash was calculated from)
```
