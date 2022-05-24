import sharp from 'sharp';

export const resizeImage = (
    imgName: string,
    width: number,
    height: number
): boolean => {
    const createThumb = () => {
        sharp(`./src/assets/full/${imgName}.png`)
            .resize(width, height)
            .toFile(
                `./src/assets/thumb/${imgName}_resized_${width}_${height}.png`
            );
    };
    const getMetadata = async () => {
        try {
            await sharp(
                `./src/assets/thumb/${imgName}_resized_${width}_${height}.png`
            ).metadata();
        } catch {
            createThumb();
        }
    };
    getMetadata();
    return true;
};
