# express-boilerplate

As the name indicates, this is a boilerplate for nodejs REST APIs construction, it uses:

* Babel to write ES2015 code
* Under `~/app` you will even find a JSON with routes that you want to secure
* There's a section of middlewares, that unlike other magic like stuff you find on packages, you can actually customize them directly on the code (for example, removing `evals`)

## Install it

`npm install`

## Run it

`npm start`

## Test it

We use mocha and chai for testing, under `test` folder, you can find one example of how to build the tests (since we use class based, it may not be straight forward)

`npm run test`

## Available routes

* `GET /test` - Simply returns a JSON with a token to test it on the next route!

* `GET /authorized/test` - Here you can actually see how the authorization mechanism is working!! :smiley:
