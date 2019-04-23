const errors = require('restify-errors');
const Customer = require('../models/Customer');

module.exports = server => {
	//GET Customers
	server.get('/customers', async (req, res, next) => {
		try {
			const customers = await Customer.find({});
			res.send(customers);
			next();
		} catch (err) {
			return next(new errors.InvalidContentError(err));
		}
	});

	// POST / Add Customer
	server.post('/customers', async (req, res, next) => {
		//Check for JSON
		if (!req.is('application/json')) {
			return next(new error.InvalidContentError("Expects 'application/json'"));
		}

		const { name, email, phone_number } = req.body;

		const customer = new Customer({
			name,
			email,
			phone_number
		});

		try {
			const newCustomer = await customer.save();
			res.send(201);
			next();
		} catch (err) {
			return next(new errors.InternalError(err.message));
		}
	});
};
