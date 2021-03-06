const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // validate request
    console.log(req.body)
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    // Create a Customer
    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Save Customer in the database
    Customer.create(customer, (err, data) => {
        if (err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Customer."
        });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};