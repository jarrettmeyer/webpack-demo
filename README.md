# Webpack Demo

This is a demo for creating a project using [Webpack](https://webpack.js.org/). It utilizes JavaScript modules for clearer code and portability.

## Running the First Time

First, you will need [NodeJS](https://nodejs.org/) installed on your system. This program is compatible with version **8.11.\* LTS**.

Installing NodeJS will also install the [Node Package managaer - NPM](https://www.npmjs.com/). This will add the `npm` command line tool to the Windows path. From a command line, enter the following command to install the dependencies.

```
$ npm install
```

## Available Commands

The following commands are available for this demo.

### npm run build

Alias to `npm run build:dev`.

### npm run build:dev

Create a development build. The output will be saved in the `dist/` folder.

```
$ npm run build:dev
```

### npm run build:prod

Create a production build. The output will be saved in the `dist/` folder.

```
$ npm run build:prod
```

### npm run start

Run the program. This will use a watch to keep the bundle up to date and refresh your browser window.

```
$ npm run start
```

### npm run test

Unit tests are written in [Jest](https://facebook.github.io/jest/). Jest requires tests to be written in NodeJS-compatible module syntax, so the [babbel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) plugin is required change ES6 modules to Node modules.

The output should be similar to the following. *Hint: more tests may have been written since this README was last updated.*

```
$ npm run test

> npm-web-demo@1.0.0 test C:\work\webpack-demo                   
> npx jest                                                       

C:\work\webpack-demo\node_modules\jest\bin\jest.js               
 PASS  tests\stringifyArray.test.js                              
  √ returns a simple string - [1, 2] (7ms)                       
  √ returns a nested array - [[1, 2], [3, 4]]                    
  √ returns a deeply nested array - [[1, 2], [3, 4], [[5]]] (1ms)
  √ can stringify an empty array (1ms)                           

Test Suites: 1 passed, 1 total                                   
Tests:       4 passed, 4 total                                   
Snapshots:   0 total                                             
Time:        2.294s                                              
Ran all test suites.                                             
```
