function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var _yaml = require('js-yaml');
var yamlFetch = function yamlFetch(input, init) {
  try {
    return Promise.resolve(global.fetch(input, init)).then(function (response) {
      return _extends({}, response, {
        yaml: function () {
          try {
            var _load = _yaml.load;
            return Promise.resolve(response.text()).then(function (_response$text) {
              return _load.call(_yaml, _response$text);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.yamlFetch = yamlFetch;
//# sourceMappingURL=index.js.map
