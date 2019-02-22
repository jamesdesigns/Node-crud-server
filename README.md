# RESTful CRUD Node Server

## SpaceX Retail Store
A retail store that sells SpaceX clothing which include Hoodies and T-shirts. 

## Deployment 
Deployed to Heroku. To view deployment link:

[Heroku Link](https://guarded-headland-15878.herokuapp.com)


## Routes

### Get All Products

* "/" - Get all products in the database

### Get Product by Name

* "/name/:name" - Get a product by specific name

### Get Product by Size

* "/size/:size" - Get a product by size (XL, Large, Medium, Small)


### Create New Product

* "/create" - Add a new product

To add a new product in Postman use the following format:

```bash 
name: product name,
price: product price,
color: product color,
size: product size
```

### Update Product by id

* "/:id/update" - Update a specific product

### Delete Product by id

* "/:id/delete" - Delete a specific product