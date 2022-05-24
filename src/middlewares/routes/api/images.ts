import express from 'express';
import { resizeImage } from '../../processing/images';
const images = express.Router();

images.get('/', (req, res, next): void => {
    try {
        if (!req.query.filename || !req.query.width || !req.query.height) {
            res.send(`
            <h1>Something is wrong!<br>Check your parameters/typo something is missing...</h1>
            `);
        } else {
            const imgName = req.query.filename;
            const imgWidth = req.query.width as unknown as number;
            const imgHeight = req.query.height as unknown as number;
            if (imgWidth < 1 || imgHeight < 1) {
                res.send(`
                <h1>Something is wrong!<br>Check your parameters...</h1>
                <p>details:<br>filename: ${imgName}<br>width: ${imgWidth}<br>height: ${imgHeight}</p>
                `);
            } else {
                const process = resizeImage(
                    imgName as string,
                    Number(imgWidth),
                    Number(imgHeight)
                );
                next();

                if (process) {
                    res.send(`
                    <h1>Thumb Image has been created</h1>\n
                    <h2>Original</h2>
                    <img src='../assets/full/${imgName}.png'>
                    <h2>Thumb</h2>
                    <img src='../assets/thumb/${imgName}_resized_${imgWidth}_${imgHeight}.png' alt="image still processing">
                    `);
                } else {
                    res.send('<h1>Something is wrong!</h1>');
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
});

export default images;
