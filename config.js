module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	URL: process.env.BASE_URL || 'http://localhost:3000',
	MONGODB_URI:
		process.env.MONGODB_URI ||
		'mongodb+srv://abc123:0JNJAbMBSkfE91uw@cluster0-q4e4h.mongodb.net/test?retryWrites=true',
	JWT_SECRET: process.env.JWT_SECRET || 'soso123'
};
