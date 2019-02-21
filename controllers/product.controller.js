const Product = require('../models/product.model');

// Simple test version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Welcome to the SpaceX Retail Store!');
};

// Find all products
exports.all = (req, res) => {
    Product.find()
    .then( (allProducts) => res.send(allProducts));
}

// Find products by name
exports.find_name = (req, res, next) => {
    const productName = req.params.name;
    Product.find({
        name: productName
    })
    .then(result => {
        res.send(result)
    })
};

// Find products by size
exports.find_size = (req, res, next) => {
    const productSize = req.params.size;
    Product.find({
        size: productSize
    })
    .then(result => {
        res.send(result)
    })
};

// Create a product
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            size: req.body.size,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('SpaceX retail product created successfully!')
    })
};

// Read product details
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

// Update product details
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Spacex product udpated.');
    });
};

// Delete product
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('SpaceX product deleted successfully!');
    })
};