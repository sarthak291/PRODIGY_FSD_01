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

    await collection.create({
      username,
      email,
      phone,
      password: hashedPassword
    });

    res.send("User registered successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Signup failed");
  }
});






const port=5000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
