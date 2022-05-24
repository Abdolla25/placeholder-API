import { resizeImage } from '../middlewares/processing/images';

describe('api testing', () => {
    it('load image has been created already check', () => {
        const testImg = resizeImage('eg', 160, 106);
        expect(testImg).toBeTrue();
    });
});
