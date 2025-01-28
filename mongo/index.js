const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const multer = require('multer');
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohail:rohail99@cluster0.bysupev.mongodb.net/carcareapp');

// Define a schema for the Maintenance data
const MaintenanceSchema = new mongoose.Schema({
  userId: String,
  inputText: String,
  inputText1: String,
  dropdownValue: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Services = new mongoose.Schema({
  userId: String,
  inputText: String,
  inputText1: String,
  dropdownValue: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

});

// Create a model from the schema
const Maintain = mongoose.model('Maintain', MaintenanceSchema);
const Service = mongoose.model('Service', Services);

// API endpoint to save Maintenance data
app.post('/api/save-maintenance', async (req, res) => {
    try {
      console.log(req.body)
      const { userId, inputText, inputText1, dropdownValue } = req.body;
      const newMaintenance = new Maintain({
        userId,
        inputText,
        inputText1,
        dropdownValue
      });
      await newMaintenance.save();
      console.log("Maintenance data saved:", newMaintenance);
      res.status(200).json({ message: 'Maintenance data saved successfully' });
    } catch (error) {
      console.error("Error saving Maintenance data:", error);
      res.status(500).send(error);
    }
  });
  app.get('/api/get-maintenance', async (req, res) => {
    // Retrieve userId from query parameters
    const userId = req.query.userId;
  
    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }
  
    try {
      // Query the database for maintenance records by userId, sorted by createdAt date in descending order
      const maintenanceData = await Maintain.find({ userId: userId }).sort({ createdAt: -1 });
      res.status(200).json(maintenanceData);
    } catch (error) {
      console.error("Error fetching Maintenance data:", error);
      res.status(500).send(error);
    }
  });
  
  app.delete('/api/delete-maintenance/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedMaintenance = await Maintain.findByIdAndDelete(id);
      if (!deletedMaintenance) {
        return res.status(404).json({ message: "Maintenance data not found" });
      }
      res.status(200).json({ message: "Maintenance data deleted successfully" });
    } catch (error) {
      console.error("Error deleting Maintenance data:", error);
      res.status(500).send(error);
    }
  });
  app.post('/api/service_entry', async (req, res) => {
    try {
      const { userId, inputText, inputText1, dropdownValue } = req.body;
      const entry = new Service({
        userId,
        inputText,
        inputText1,
        dropdownValue 
      });
      await entry.save();
      console.log("Service Entry saved:", entry);
      res.status(200).json({ message: 'New data saved successfully' });
    } catch (error) {
      console.error("Error saving Service Entry data:", error);
      res.status(500).send(error);
    }
  });
  app.get('/api/get-entry', async (req, res) => {
    // Retrieve userId from query parameters
    const userId = req.query.userId;
  
    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }
  
    try {
      // Query the database for service records by userId, sorted by createdAt date in descending order
      const serviceData = await Service.find({ userId: userId }).sort({ createdAt: -1 });
      res.status(200).json(serviceData);
    } catch (error) {
      console.error("Error fetching service data:", error);
      res.status(500).send(error);
    }
  });
  app.delete('/api/delete-entry/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedEntry = await Service.findByIdAndDelete(id);
      if (!deletedEntry) {
        return res.status(404).json({ message: "Entry not found" });
      }
      res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
      console.error("Error deleting entry:", error);
      res.status(500).send(error);
    }
  });
  
  const ExpenseSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: String  // optional field
  });
  
  const Expense = mongoose.model('expenses', ExpenseSchema, 'expenses');
  
  // Routes
  // Route to get all expenses
  app.get('/expenses', async (req, res) => {
    // Retrieve userId from query parameters
    const userId = req.query.userId;
  
    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }
  
    try {
      // Query the database for expense records associated with the userId
      const expenses = await Expense.find({ userId: userId });
      res.json(expenses);
    } catch (err) {
      console.error("Error fetching expense data:", err);
      res.status(500).json({ message: err.message });
    }
  });
  
  
  // Route to add a new expense
  app.post('/expenses', async (req, res) => {
    // Destructure necessary fields from req.body
    const { userId, category, amount, date, notes } = req.body;
  
    // Check if the required fields and userId are provided
    if (!userId || !category || !amount || !date) {
      return res.status(400).json({ message: 'Required fields including userId are missing' });
    }
  
    try {
      // Create a new expense with all the provided fields including userId
      const newExpense = new Expense({ userId, category, amount, date, notes });
      await newExpense.save();
      res.status(201).json(newExpense);
    } catch (err) {
      console.error("Error saving new expense:", err);
      res.status(500).json({ message: err.message });
    }
  });
  
  
  app.delete('/expenses/:id', async (req, res) => {
    try {
      const expense = await Expense.findByIdAndDelete(req.params.id);
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  
  const FuelSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    odometer: { type: Number, required: true },
    efficiency: { type: Number } // calculated fuel efficiency
  });
  
  const Fuel = mongoose.model('fuels', FuelSchema, 'fuels');
  
  // Function to calculate fuel efficiency
  function calculateFuelEfficiency(quantity, price, odometer) {
      // Assume an average price per unit for simplicity
      const averagePricePerUnit = price; // in currency/unit
  
      // Calculate cost of the fuel consumed
      const cost = quantity * averagePricePerUnit;
  
      // Calculate fuel efficiency (cost per distance traveled)
      const efficiency = cost / odometer;
  
      // Return fuel efficiency
      return efficiency;
  }
  
  app.get('/fuels', async (req, res) => {
    const userId = req.query.userId;  // Retrieve userId from query parameters
  
    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }
  
    try {
      const fuels = await Fuel.find({ userId: userId });  // Fetch only the fuel data for the given userId
      res.json(fuels);
    } catch (err) {
      console.error("Error fetching fuel data:", err);
      res.status(500).json({ message: err.message });
    }
  });
  
  
  
  // Routes
  // Route to add fuel details
  app.post('/fuels', async (req, res) => {
    const { userId, date, quantity, price, odometer } = req.body;
  
    // Check for the presence of all required fields including userId
    if (!userId || !date || !quantity || !price || !odometer) {
      return res.status(400).json({ message: 'All fields including userId are required' });
    }
  
    try {
      // Optionally, you could calculate fuel efficiency if relevant
      const efficiency = calculateFuelEfficiency(quantity, price, odometer);
  
      // Create a new fuel record with userId
      const newFuel = new Fuel({ userId, date, quantity, price, odometer, efficiency });
      await newFuel.save();
      res.status(201).json(newFuel);
    } catch (err) {
      console.error("Error creating fuel record:", err);
      res.status(500).json({ message: err.message });
    }
  });
  
  
  
  app.delete('/fuels/:id', async (req, res) => {
    try {
      const fuel = await Fuel.findByIdAndDelete(req.params.id);
      if (!fuel) {
        return res.status(404).json({ message: 'Fuel Details not found' });
      }
      res.status(200).json({ message: 'Fuel Detail deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true }
  });
  
  const User = mongoose.model('User', UserSchema);
  
  // Routes
  // Route to register a new user
  app.post('/register', async (req, res) => {
    const { fullname, email, phonenumber, password, confirmpassword } = req.body;
    try {
      const existingUser = await User.findOne({ $or: [{ email }, { phonenumber }] });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email or phone number already exists' });
      }
      if (password !== confirmpassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
      const newUser = new User({ fullname, email, phonenumber, password, confirmpassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Routes
  // Route to login a user
  app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    email = email.toLowerCase(); // Convert email to lowercase
    
    try {
      // Check if the user exists
      const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Check if the password is correct
      if (password !== user.password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      // Login successful, return user ID
      res.status(200).json({ userId: user._id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  const nodemailer = require('nodemailer');
  
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zain.tap@gmail.com', // Your Gmail email address
      pass: 'ovdc oyys myzr cjpi' // Your Gmail password
    }
  });
  
  // Route to handle password reset
  app.post('/forgot-password', async (req, res) => {
    let { email } = req.body;
    email = email.toLowerCase(); // Convert email to lowercase
    try {
      // Check if the user with the provided email exists (case-insensitive)
      const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Generate a new random password
      const newPassword = Math.random().toString(36).slice(-10); // Generates an 8-character alphanumeric password
      
      // Update the user's password in the database
      user.password = newPassword;
      user.confirmpassword = newPassword;
      await user.save();
  
      // Send the new password to the user via email
      const mailOptions = {
        from: 'carcareapplication4@gmail.com@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Your new password is: ${newPassword}`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Failed to send email' });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({ message: 'New password sent to your email' });
        }
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    try {
      // Find user by user ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Extract relevant user information
      const { fullname, email, phonenumber } = user;
      // Return user information
      res.status(200).json({ fullname, email, phonenumber });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination path relative to the current file
      cb(null, path.join(__dirname, 'public'));
    },
    filename: function (req, file, cb) {
      // Generate a unique filename by appending a timestamp to the original filename
      const timestamp = Date.now();
      const ext = path.extname(file.originalname);
      cb(null, `${timestamp}${ext}`);
    },
  });
  
  const imageFilter = function (req, file, cb) {
    // Accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };
  
  const uploader = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: {
      fileSize: 1024 * 1024 * 10, // Limit file size to 10 MB
    },
  });
  
  // File upload endpoint
  app.post('/upload', uploader.single('filer'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded!' });
      }
      console.log('File uploaded successfully:', req.file.filename);
      res.json({ message: 'File uploaded successfully', filename: req.file.filename });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // Error handling middleware for Multer
  app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      // Multer errors (e.g., file size exceeded, invalid file type) 
      res.status(400).json({ error: err.message });
    } else {
      // Other errors
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  const WorkshopsSchema = new mongoose.Schema({
    W_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
  })
  
  const Workshops = mongoose.model('Workshops', WorkshopsSchema, 'Workshops');
  
  app.get('/Workshops', async (req, res) => {
    try {
      const workshops = await Workshops.find({});
      res.json(workshops);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get('/Workshops/:W_id', async (req, res) => {
    const { W_id } = req.params;
    try {
      const workshop = await Workshops.findOne({ W_id });
      if (!workshop) {
        return res.status(404).json({ message: 'Workshop not found' });
      }
      res.status(200).json(workshop);
    } catch (error) {
      console.error('Error fetching workshop details:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  const ReviewsSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    workshopName: {
      type: String,
      required: true,
    },
    W_id: {
      type: Number,  // Assuming this is intentionally a Number and not an ObjectId
      required: true,
    }
  });
  
  const Reviews = mongoose.model('Reviews', ReviewsSchema);
  
  app.get('/Reviews/:W_id', async (req, res) => {
    const W_id = Number(req.params.W_id); // Convert W_id to Number if it's expected to be a number
    try {
      const reviews = await Reviews.find({ W_id: W_id });
      console.log(reviews);
      if (reviews.length === 0) {  // Check if the returned array is empty
        return res.status(404).json({ message: 'Reviews not found' });
      }
      res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews details:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  app.get('/fuels1/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const fuels = await Fuel.find({ userId: userId });
        res.json(fuels);
    } catch (err) {
        console.error("Error fetching fuel data:", err);
        res.status(500).json({ message: err.message });
    }
});

app.get('/maintenance1/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
      const maintenanceData = await Maintain.find({ userId: userId }).sort({ createdAt: -1 });
      res.json(maintenanceData);
  } catch (err) {
      console.error("Error fetching maintenance data:", err);
      res.status(500).json({ message: err.message });
  }
});

app.get('/expenses1/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
      const expenses = await Expense.find({ userId: userId });
      res.json(expenses);
  } catch (err) {
      console.error("Error fetching expense data:", err);
      res.status(500).json({ message: err.message });
  }
});

app.get('/services1/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
      const serviceData = await Service.find({ userId: userId }).sort({ createdAt: 1 });
      res.json(serviceData);
  } catch (err) {
      console.error("Error fetching service data:", err);
      res.status(500).json({ message: err.message });
  }
});


 const MaintainNot = mongoose.model('Maintain', MaintenanceSchema);

 
  
  // API route to fetch all data from the 'maintain' collection
  app.get('/maintains/:userId', async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
  
    try {
      // Find all records in the 'Maintain' collection for the given userId
      const users = await MaintainNot.find({ userId });
  
      if (!users || users.length === 0) {
        console.log('No data found for the userId:', userId);
        return res.status(404).json({ message: 'Data not found' });
      }
  
      // Return all user information
      res.status(200).json(users);
  
      // Log fetched data to console
      console.log('Fetched data for userId:', userId, users);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ message: err.message });
    }
  });


  



  
// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));