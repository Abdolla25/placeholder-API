"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
describe('server testing', function () {
    it('port check', function () {
        expect(__1.port).toBe(3000);
    });
    it('server running check', function () {
        expect(__1.isServerRun).toBeTrue();
    });
});
