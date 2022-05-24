# udacity-first-project
Advanced Full-Stack Web Development Nanodegree - First Project (Image Processing API)

# Project Structure:

| Dir               | Description                  |
| ----------------- | ---------------------------- |
| ./dist            | **build dir (js)**           |
| ./src             | **script dir (ts)**          |
| ./src/assets      | **static files**             |
| ./src/middlewares | **modules/middleware files** |
| ./src/tests       | **tests files**              |

# Project Scripts

| Script     | Description                                                |
| ---------- | ---------------------------------------------------------- |
| "node"     | used to start the index compiled js file.                  |
| "build"    | used for building ts files to js files.                    |
| "jasmine"  | used for run compiled tests without building last changes. |
| "start"    | used for starting Express server.                          |
| "test"     | used for build and test the code.                          |
| "lint"     | used for linting using eslint.                             |
| "fix"      | used for fixing all fixable errors/warnings.               |
| "prettier" | used for formatting using prettier.                        |

> all tests/lint/build scripts are running without errors.

# Endpoints

`/api` : accessing localhost:3000/api sends a basic page contains all images included for testing and working with api.

`/api/images?filename=<str>&width<num>&height<num>` : using this endpoint allows you to call the api and sends arguments to start the processing of the image, the server sends a response with the image in a basic page.

# Usage

```
npm run start
```
start the server on localhost, port 3000

visit `http://localhost:3000/api` to see available images.

>for example: `http://localhost:3000/api/images?filename=eg&width=160&height=106`

if image was processed before, the api will send `response` without re-processing the image.