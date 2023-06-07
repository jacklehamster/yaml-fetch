const yaml = require('js-yaml');

export type YamlFetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response & {yaml():Promise<any>}>;

export const yamlFetch: YamlFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response & {yaml():Promise<any>}> => {
  const response = await global.fetch(input, init);
  return {
      ...response,
      yaml: async () => yaml.load(await response.text()),
  }
}
