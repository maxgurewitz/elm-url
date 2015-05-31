Elm.Native.Url = {};
Elm.Native.Url.make = function(elm) {

    elm.Native = elm.Native || {};
    elm.Native.Url = elm.Native.Url || {};
    if (elm.Native.Url.values) { return elm.Native.Url.values; };

    example2 = function(a) {
      return a - 1;
    };

    return {
      example2: example2
    };
};
