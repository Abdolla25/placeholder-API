import { port, isServerRun } from '..';

describe('server testing', () => {
    it('port check', () => {
        expect(port).toBe(3000);
    });

    it('server running check', () => {
        expect(isServerRun).toBeTrue();
    });
});
