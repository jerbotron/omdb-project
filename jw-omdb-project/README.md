# jw-omdb-project: omdb project submission by Jeremy Wang

## Prerequisites

The only requirement is that you have Node.js installed. The recommended version is `6.x` and can be installed using [nvm](https://github.com/creationix/nvm).

## Setup (REQUIRED)

Start by cloning the project and installing the node modules:

    git clone git@github.com:Wexcode/webpack-babel-react.git
    npm install

Your application will not compile until you create a copy of `config.json.sample`.

    cp config.json.sample config.json

## Usage

This project relies on [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for development. This service automatically compiles your files as they are changed and triggers a browser refresh.

You can start this service by running:

    npm run develop

You can also launch an instance of [http-server](https://github.com/indexzero/http-server) to serve built static files.

    npm run build
    npm run server

## Code consistency

This repo provides an `.eslintrc` based off of [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It is recommended that you install an [eslint plugin](http://eslint.org/docs/user-guide/integrations) in your editor to lint your files as you work.

You can also check the entire project by running:

    npm run linter
