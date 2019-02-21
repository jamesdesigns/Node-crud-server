const Product = require('../models/product.model');

// Simple test version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Welcome to SpaceX Retail Store!');
};

// View all products
exports.all = (req, res) => {
    Product.find({})
    .then( (allProducts) => res.json(allProducts))
}

// Find one product
exports.find_one = (req, res) => {
    Product.findOne({ name: req.params.name })
    .then( (foundProduct) => res.json(foundProduct))
}

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
        res.send('Product created successfully!')
    })
};

// Find product details
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
        res.send('Product udpated.');
    });
};

// Delete product
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};