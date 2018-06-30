# Assessment

[Demo Heroku App](https://assessm-client.herokuapp.com/)

[![Maintainability](https://api.codeclimate.com/v1/badges/8d8250dc751b35f14d9f/maintainability)](https://codeclimate.com/github/kimobrian/ember-client/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8d8250dc751b35f14d9f/test_coverage)](https://codeclimate.com/github/kimobrian/ember-client/test_coverage)
[![Build Status](https://travis-ci.com/kimobrian/ember-client.svg?branch=master)](https://travis-ci.com/kimobrian/ember-client)

Ember client app for https://github.com/kimobrian/server

This is a simple client side app build in Ember JS to work with the server app in the repo above ☝️

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation and Running

* `git clone <repository-url>` this repository
* `cd assessment`
* `npm install`
* Setup the server using the instruction from [THE SERVER REPO](https://github.com/kimobrian/server)
* Set an environmental variable `API_URL` to the server URL. This can easily be done together while running the app using:
  * For example `API_URL=http://localhost:5600 ember s`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:port](http://localhost:4444).
* Visit your tests at [http://localhost:port/tests](http://localhost:4444/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
