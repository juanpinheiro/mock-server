# MOCK SERVER

This project generate a RESTFUL MOCK SERVER using one JSON file to configure the output:

 * Starting setting up the project
```
	npm install 
	npm install gulp-cli -g
```

* Create a new mock file `touch mock/hello-world.json`

```javascript
{
  "method": "GET",
  "route": "/helloworld",
  "use": 200,
  "timeout": 200,
  "200": {
    "data": {
      "id": 1,
      "title": "Hello World",
    }
  },
  "500": {
    "data": {
      "message": "500 - Internal Server Error!"
    }
  }
}
```

* Run your server using the command `gulp serve`

* Then just access your endpoint `http://localhost:3000/helloworld`

### JSON Configuration:

* Base configuration

| JSON Data        | Options           | Description  |
| ------------- |:-------------:| -----:|
| method | `GET, POST, PUT, DELETE` | HTTP Request Method |
| route      | `your/route/:id`      |  Endpoint `localhot:3000/your/route/1` |
| use | `200, 500, 503, ...` | Any HTTP Status Code, related to the response data  |
| timeout | `milliseconds` | Custom response time |

* You can set one response for each HTTP Status Code.Implement the following response:


```javascript
...  
"200": {
    "data": {
      "id": 1,
      "title": "Hello World"
    }
},
"500": {
    "data": {
      "message": "500 - Internal Server Error"
    }
}
...
```



### Stuff used to make this:

 * [GulpJS](https://gulpjs.com/) to automate and enchance the workflow
 * [Express](http://expressjs.com/pt-br/) used to implment our RESTful API
 * [NodeJS](https://nodejs.org/en/) cause it's cool! :)
