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

#Assumptions
* The focus was to create an application that provides a RESTful service to get product information by productID's.
* A NoSQL database was to be used to provide the product info
* The example product ID's and response given in the directions were not part of the spec, but simply guides to facilitate thinking about the exercise

#Stretch goals considered
* Refactoring the codebase to eliminate the previous use case for the code
* Adding in a series of HTTP PUT requests to update product information, such as price
* Adding validation for the PUT requests
* Adding a series of automated regression tests as part of the build process
* Increased uptime and scalability by increasing the Heroku subscription or migrating to another platform to host
* Adding authentication to have some sort of security model for the API
* A cleaner UI for the web page that displays the inventory and possibly more features for that view


#Extra info

This application was manually tested using Postman (https://www.getpostman.com/)

You can view a list of the items in the database along with their ID's here:
https://guarded-caverns-35176.herokuapp.com/#/

