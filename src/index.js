const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');
const collection = require('./config');

const app = express();

//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended:false}));


//use ejs as the view engine
app.set('view engine', 'ejs'); 
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //check if data already exists
    const existingUser = await collection.findOne({ username: username });

    if (existingUser) {
      return res.send("User already exists");
    }
    else{
    //create a new user
    await collection.create({
      username,
      email,
      phone,
      password: hashedPassword
    });

    res.send("User registered successfully");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Signup failed");
  }
});



//Login post request
app.post("/login", async (req, res) => {
  try {
    const checkuser = await collection.findOne({ username: req.body.username });
    if (!checkuser) {
       res.send("Invalid username or password");
    }
       const isMatch = await bcrypt.compare(req.body.password, checkuser.password);
       if (isMatch) {
         res.render("home");
       } else {
         res.send("Invalid username or password");
       }
  }catch (error){
    res.send("Login failed");

  }
});


const port=5000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
