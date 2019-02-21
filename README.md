# RESTful CRUD Node Server

## SpaceX Retail Store API 
A retail store that contains SpaceX clothing products such as Hoodies and T-shirts. 

## Deployment 
Deployed to Heroku

## Routes

"/" - Get all products in the database
"/name/:name" - Get a product by name
"/size/:size" - Get a product by size
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