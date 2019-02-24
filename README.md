# RESTful CRUD Node Server

## SpaceX Retail Store
A retail store that sells SpaceX clothing and accessories. 

## Deployment 
Deployed to Heroku. To view deployment link:

[https://guarded-headland-15878.herokuapp.com](https://guarded-headland-15878.herokuapp.com)


## Routes

### Get All Products

* "/products/" - Get all products in the database

### Get Product by Name

* "/products/name/:name" - Get a product by specific name

### Get Product by Size
Entering the following sizes are all case sensitive. 

* "/products/size/:size" - Get a product by size (XL, Large, Medium, Small)


### Create New Product

* "/products/create" - Add a new product

To add a new product in Postman use the following format:

```bash 
name: product name,
price: product price,
color: product color,
size: product size
```

### Update Product by id

* "/products/:id/update" - Update a product with the specific id

### Delete Product by id

* "/products/:id/delete" - Delete a product with the specific id