import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (_req: express.Request, res: express.Response): void => {
    res.send(`
    <h1>Welcome to my api</h1>
    choose on of the following files:
    <ul>
        <li><a href="/api/images?filename=eg&width=160&height=106">Egypt Flag Placeholder</li>
        <li><a href="/api/images?filename=fr&width=160&height=106">France Flag Placeholder</li>
    </ul>`);
});

routes.use('/images', images);

export default routes;
