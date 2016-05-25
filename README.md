iAdvize NodeJS Service Boilerplate [![Circle CI](https://circleci.com/gh/iadvize/my-first-nodejs-service/tree/master.svg?style=svg)](https://circleci.com/gh/iadvize/my-first-nodejs-service/tree/master)
=============================================

## Watch the keynote

<p align="center">
<a target="_blank" href="https://www.youtube.com/watch?v=mi0U4e0wBP4"><img style="width:100%" src="https://cloud.githubusercontent.com/assets/138050/8324879/e1fe303a-1a54-11e5-96e7-b001fb8b6927.png"></a>
</p>

## Watch the screencast and slides

[![slides](https://cloud.githubusercontent.com/assets/138050/8324993/f1b3755c-1a55-11e5-8826-490619d66ce7.png)](https://www.youtube.com/watch?v=5fYogApDqHY)


## Setup

 [Nvm should be installed](https://github.com/creationix/nvm#install-script)

```bash
nvm install
nvm use
npm install
```

## [Service topology](https://services-mapping.clever.iadvize.com/)

Format:

> - protocol=HTTP repository=github-repository-name

## Start

```bash
npm run start
```

## API documentation

```bash
# start the server and then :
open http://127.0.0.1:8080/api-docs
```

## Tests

#### Run tests locally

```bash
npm test
```

#### Automatically reload tests while coding

```
npm run test-watch
```

#### Test coverage

```
open test/coverage/lcov-report/index.html
```

A cobertura xml file is also available in `test/coverage/cobertura-coverage.xml`.


## Continuous Integration

#### Setup Jenkins

```bash
#!/bin/bash
cd $WORKSPACE
export VAR_1=PRIVATE_VALUE_1
export VAR_2=PRIVATE_VALUE_2
# and so on...
source ./scripts/ci/start
```

#### Debug locally

```bash
npm run ci
```

## Versioning

This project follows the [Semantic Versioning 2.0.0](http://semver.org/).
