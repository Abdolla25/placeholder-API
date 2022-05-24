import express from 'express';
import routes from './middlewares/routes';

const app = express();
const port = 3000;
let isServerRun = false;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    isServerRun = true;
});

app.get('/', (_req: express.Request, res: express.Response) => {
    res.send(
        `<h1>Request State: ${res.statusCode}</h1>
        \n<a href='/api'>API LINK</a>`
    );
});

app.use('/api', routes);

app.use('/assets', express.static(__dirname + '/assets'));

export { app, port, isServerRun };
