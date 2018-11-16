# Send-IT API Endpoint [![Build Status](https://travis-ci.org/Kabalisa/senditapi.svg?branch=master)](https://travis-ci.org/Kabalisa/senditapi) [![Coverage Status](https://coveralls.io/repos/github/Kabalisa/senditapi/badge.svg)](https://coveralls.io/github/Kabalisa/senditapi) [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
Send-IT is a courier service that helps its users to deliver packages wherever they are to whatever destination. Send-IT provides its quotes
based on weight of the package. 

Following is a list of API Endpoint you will find:

* **GET/parcels** Fetch all parcel delivery orders
* **GET/parcels/:parcelid** fetch a specific parcels delivery order
* **GET/users/:userid/pardels** fetch all parcel delivery orders by a specific user
* **PUT/parcels/:parcelid/cancel** cancel the specific parcel delivery order
* **POST/parcels** create a parcel delivery order
 
 # Tools:
 * server-side Framework: **Node/Express**
 * Linting Library : **Eslint**
 * Style Guide : **Airbnb**
 * Testing Framework :**Mocha** or **Jasmine**
 
 # Other Tools:
 * Travis CI for continous intergration
 * Babel transpiler for javascript ES6
 * Istanbul and nyc for test coverage
 * maintainability badge from codeclimate
 * Heroku deployment
 
 the app's URL on heroku is [sendorder.herokuapp.com](https://sendorder.herokuapp.com/)
 
 following is a list of example routes deployed on heroku:
 
 * to Fetch all parcel delivery orders [sendorder.herokuapp.com/api/v1/parcels](https://sendorder.herokuapp.com/api/v1/parcels)
 * fetch a specific parcels delivery order [sendorder.herokuapp.com/api/v1/parcels/1](https://sendorder.herokuapp.com/api/v1/parcels/1)
 * fetch all parcel delivery orders by a specific user [sendorder.herokuapp.com/api/v1/users/657384/parcels](https://sendorder.herokuapp.com/api/v1/users/657384/parcels/)
 * cancel the specific parcel delivery order [sendorder.herokuapp.com/api/v1/parcels/2/cancel](https://sendorder.herokuapp.com/api/v1/parcels/2/cancel)
 * create a parcel delivery order [sendorder.herokuapp.com/api/v1/parcels](https://sendorder.herokuapp.com/api/v1/parcels)

# Installation: 
**Follow the step below:**

If you do not have node.js and git in your computer, install them first:

* download [node.js](https://nodejs.org/en/download/)

* download [git](https://git-scm.com/downloads)

Clone this project using:

```
git clone
```

USE POSTMAN to test requests other than the GET request.
