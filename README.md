# RESTful CRUD Node Server

## SpaceX Retail Store
A retail store that sells SpaceX clothing which include Hoodies and T-shirts. 

## Deployment 
Deployed to Heroku

## Heroku 
To view deployment link:
[Heroku URL] https://guarded-headland-15878.herokuapp.com


## Routes

"/" - Get all products in the database

"/name/:name" - Get a product by specific name

"/size/:size" - Get a product by size (XL, Large, Medium, Small)

"/create" - Add a new product


To submit add a new product in Postman use the following format:

```bash 
name: product name,
price: product price,
color: product color,
size: product size
```

"/:id/update" - Update a specific product

"/:id/delete" - Delete a specific product