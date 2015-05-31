var Url = require('./Url');

Elm.Native.Url = {};
Elm.Native.Url.make = function(elm) {

    elm.Native = elm.Native || {};
    elm.Native.Url = elm.Native.Url || {};
    if (elm.Native.Url.values) { return elm.Native.Url.values; };

    return Url; 
};
