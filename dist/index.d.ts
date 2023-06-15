import yaml from "js-yaml";
export declare const yamlFetch: (input: RequestInfo | string, init?: RequestInit | undefined) => Promise<Response & {
    yaml(): Promise<any>;
}>;
