# MOCK SERVER

You can create a fake Restfull API of your mocks to improve your front-end development using only JSON.

It's just a Node.js app using [Express](http://expressjs.com/).

This application fully supports the [Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running Locally

You must have the following applications installed:
- [Node.js](https://nodejs.org/en/download/).
- [MongoDB](https://docs.mongodb.com/manual/installation/).


```sh
$ git clone https://github.com/juanpinheiro/mock-server.git # or clone your own fork
$ cd mock-server
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

We gonna use  [Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) and  [mLab](https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mlab-deployments-from-heroku).
You must have [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ heroku create # or heroku create project-name
$ heroku addons:create mongolab
$ git push heroku master
$ heroku open
```

## How to use MOCK SERVER

### Using Front-end Web Application
You can use the [Front-end Web Application](https://github.com/daniloluca/mock-server-front) to manage your mock.

### Using the API
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1843c0fd38a20118a588)

- Header `ContentType: application/json`

- POST `/mock`, save and update passing "_id" field.
  ```javascript
      {
      "method": "GET",
      "route": "/hello",
      "use": 200,
      "timeout": 200,
      "responses":[
          {
              "code": 200,
              "data": {
                  "msg": "test123"
              }
          },
          {
              "code": 500,
              "data": {
                  "msg": "fodeu"
              }
          }
      ]
  }
  ```
- GET `/mocks`, return all mocks
- GET `/mock/:id`, ruturn a single mock by ID
- DELETE `/mock/:id`, delete a mock by ID

### Have fun!
