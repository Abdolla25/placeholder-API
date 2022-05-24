"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = require("../middlewares/processing/images");
describe('api testing', function () {
    it('load image has been created already check', function () {
        var testImg = (0, images_1.resizeImage)('eg', 160, 106);
        expect(testImg).toBeTrue();
    });
});
