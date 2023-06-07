const yaml = require('js-yaml');

export const yamlFetch = async (input: RequestInfo | string, init?: RequestInit): Promise<Response & {yaml():Promise<any>}> => {
  const response = await global.fetch(input, init) as Response & {yaml():Promise<any>};
  response.yaml = async () => yaml.load(await response.text());
  return response;
}
