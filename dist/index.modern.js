var yaml = require('js-yaml');
var yamlFetch = function yamlFetch(input, init) {
  try {
    return Promise.resolve(global.fetch(input, init)).then(function (response) {
      response.yaml = function () {
        try {
          var _load = yaml.load;
          return Promise.resolve(response.text()).then(function (_response$text) {
            return _load.call(yaml, _response$text);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      };
      return response;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export { yamlFetch };
//# sourceMappingURL=index.modern.js.map
