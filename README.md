# Test
Test push/clone

NOTES:
 "buildDev": "webpack --config webpack.dev.js",
 "build": "webpack --config webpack.prod.js",
 "startDev": "webpack-dev-server --config webpack.dev.js --open --hot",
 "start": "webpack-dev-server --config webpack.prod.js --open --hot"

Chrome - Audits - Better performance score when we build in production mode
- webpack minifies the bundle.js automatically when the mode is set to production


- Also dist folder is not generated in our folder structure when we use webpack-dev-server

- To inspect the dist/bundle.js in different modes, try npm run buildDev/build

