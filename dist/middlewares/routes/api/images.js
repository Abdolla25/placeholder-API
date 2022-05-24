"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = require("../../processing/images");
var images = express_1.default.Router();
images.get('/', function (req, res, next) {
    try {
        if (!req.query.filename || !req.query.width || !req.query.height) {
            res.send("\n            <h1>Something is wrong!<br>Check your parameters/typo something is missing...</h1>\n            ");
        }
        else {
            var imgName = req.query.filename;
            var imgWidth = req.query.width;
            var imgHeight = req.query.height;
            if (imgWidth < 1 || imgHeight < 1) {
                res.send("\n                <h1>Something is wrong!<br>Check your parameters...</h1>\n                <p>details:<br>filename: ".concat(imgName, "<br>width: ").concat(imgWidth, "<br>height: ").concat(imgHeight, "</p>\n                "));
            }
            else {
                var process_1 = (0, images_1.resizeImage)(imgName, Number(imgWidth), Number(imgHeight));
                next();
                if (process_1) {
                    res.send("\n                    <h1>Thumb Image has been created</h1>\n\n                    <h2>Original</h2>\n                    <img src='../assets/full/".concat(imgName, ".png'>\n                    <h2>Thumb</h2>\n                    <img src='../assets/thumb/").concat(imgName, "_resized_").concat(imgWidth, "_").concat(imgHeight, ".png' alt=\"image still processing\">\n                    "));
                }
                else {
                    res.send('<h1>Something is wrong!</h1>');
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = images;
