import fetch from "./index";

describe('yaml-fetch', () => {
    const text = jest.fn();

    beforeEach(() => {
        global.fetch = jest.fn().mockReturnValue(Promise.resolve({
            text,
        }));
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
        
    it('should return a response with yaml() available', async () => {
        text.mockReturnValue(Promise.resolve(`
            yaml:
            - test
        `));
        const response = await fetch("dummy.yaml");
        const yaml = await response.yaml();
        expect(yaml).toEqual({yaml: ["test"]});
    });
});
