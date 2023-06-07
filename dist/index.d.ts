declare const yaml: any;
export declare const yamlFetch: (input: RequestInfo | string, init?: RequestInit | undefined) => Promise<Response & {
    yaml(): Promise<any>;
}>;
export {};
