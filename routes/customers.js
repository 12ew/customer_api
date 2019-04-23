const errors = require('restify-errors');
const customer = require('../models/Customer');

module.exports = server => {
	server.get('/customers', async (req, res, next) => {
		try {
			const customers = await Customer.find({});
			res.send(customers);
			next();
		} catch (err) {
			return next(new errors.InvalidContentError(err));
		}
	});
};
