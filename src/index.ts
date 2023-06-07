const yaml = require('js-yaml');

export const yamlFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response & {yaml():Promise<any>}> => {
  const response = await global.fetch(input, init);
  return {
      ...response,
      yaml: async () => yaml.load(await response.text()),
  }
}
