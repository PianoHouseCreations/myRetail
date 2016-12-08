# myRetail
demo REST API

myRetail is a RESTful API server and web application built with the MEAN stack. It is a simple example that aims to concisely demonstrate basic MEAN and REST architecture. This was based on the full tutorial I found here: https://devcenter.heroku.com/articles/mean-apps-restful-api.

This repo is setup to build the application after every check-in of code to the master branch on this repo.

The endpoint is: https://guarded-caverns-35176.herokuapp.com/products/:id

#Usage:
Provide the id with a REST GET request for the item you wish to get information for.

Example: https://guarded-caverns-35176.herokuapp.com/products/:id

5848de83bf6451001158e16a

The JSON response should be:
{
  "_id": "5848de83bf6451001158e16a",
  "department": "Grocery",
  "description": "2% Milk",
  "itemType": "food - perishable",
  "inventoryValue": "1.00",
  "currentPrice": "2.50",
  "currencyCode": "USD",
  "createDate": "2016-12-08T04:16:03.776Z"
}

#Extra info

This application was manually tested using Postman (https://www.getpostman.com/)

You can view a list of the items in the database along with their ID's here:
https://guarded-caverns-35176.herokuapp.com/#/
