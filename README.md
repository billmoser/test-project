[![Travis CI w/ Logo](https://travis-ci.org/billmoser/test-project.svg?branch=main)](https://travis-ci.org/billmoser/test-project)
[![CodeCov](https://codecov.io/gh/billmoser/test-project/branch/main/graph/badge.svg)](https://codecov.io/gh/billmoser/test-project)
[![Generic badge](https://img.shields.io/badge/docs-GHpages-blue.svg)](https://billmoser.github.io/test-project/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Known Vulnerabilities](https://snyk.io/test/github/billmoser/test-project/badge.svg?targetFile=package.json)](https://snyk.io/test/github/billmoser/test-project?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Test project for javascript build and deployment
An es6 javascript project to demonstrate use of travis-ci to: 
- run tests using jest,
- push coverage results to codecov.io, and
- deploy jsdoc-built docs to github.io

## Motivation
I created this because I hadn't used Travis CI for build and deployment of and es6 code base, so I wanted a simple project I could use to explore the options and procedures

## General setup
The project uses vanilla es6 javascript, including es6 modules.  For node compatibility, the
package.json "type" is "module".  There is no use of babel, webpack, etc.

## Test setup and travis-ci
First, install standard, eslint, jest, and cross-env as devDependencies.  The "standard" package is a style checker.  "eslint" is used to check complexity here.  "jest" is the test framework, and "cross-env" allows you to set environment variables
in a cross-platform way.  In this case, it's just used to make sure that node understands that es-6
modules are in use when the tests are run.  Next, add these to the "scripts" section of package.json:
 - "complexity": "eslint index.js src/*.js test/*.js",
 - "style": "standard index.js src/*.js test/*.js",
 - "pretest": "npm run complexity && npm run style",
 - "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
 
 Edit .eslintrc.yml to add/modify complexity rules.  Finally, create an account at travis-ci.com, and add the .travis.yml file with test parts filled out appropriately

## Generating documentation
First, install docdash, and jsdoc as devDependencies.  "jsdoc" is the documentation generator, and
docdash is a template for the jsdoc output. Next, populate .jsdoc.json, and finally add these to
"scripts" in package.json:
  - "predocs": "rm -rf docs",
  - "docs": "jsdoc --configure .jsdoc.json --verbose",

You'll then need to greate a page for the project at github.io.  Then, in your github project's settings, you'll need to add the github pages config, with these options:
 - branch: gh-pages
 - source: / (root)

 Finally, update .travis.yml with the items needed for documentation generation and deployment

## Code coverage
For this, just update .travis.yml to include the coverage options.  Then create ann account at codecov.io, and link your github project
