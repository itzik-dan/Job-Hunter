const express = require("express");
const connectDB = require('./config/db');
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require('./config/keys');
// require("./models/User");
require("./services/passport");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Define Routes
// Google auth routes
require("./routes/api/authRoutes")(app);
// Jobs routes
require("./routes/api/jobRoutes")(app);
// profiles routes
require("./routes/api/profileRoute.js")(app);

//Serve static assests if in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
  	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path')
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
