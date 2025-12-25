# PRODIGY_FSD_01 - Signup & Login Authentication System

This project is a **Signup & Login Authentication Web Application** built using **Node.js, Express.js, EJS, CSS, and JavaScript**.  
It demonstrates how to register users, store their credentials securely, and validate their login through server-side authentication.
It also have mongo support and hashing password support.

---

## 🔐 Project Overview

The main goal of this project is to provide a basic user authentication system with:

- User Signup / Registration
- Secure Login Authentication
- Session or password verification handling
- Error handling for invalid credentials
- EJS-based UI for dynamic pages

This is suitable as a beginner-friendly full-stack authentication project.

---

## 🚀 Features

✔ User Signup (create account)  
✔ Login form with validation  
✔ Password encryption / verification (if used; add bcrypt if implemented)  
✔ Server-side validation with Express  
✔ Dynamic EJS views (Signup, Login, Dashboard)  
✔ Redirect to dashboard/home after login  
✔ Basic authentication flow & structure

> If you're using bcrypt or sessions, mention it here.

---

## 🧰 Tech Stack

| Component | Technology |
|----------|-------------|
| Backend  | Node.js + Express.js |
| Frontend | HTML, CSS, JS, EJS Templates |
| Auth     | Form validation / bcrypt (optional) |
| Runtime  | npm / Node environment |

---

## 📁 Folder Structure
PRODIGY_FSD_01/
├── public/ # CSS, JS, static files
├── views/ # EJS frontend pages
│ ├── login.ejs
│ ├── signup.ejs
│ └── dashboard.ejs
├── src/ # Routes / Controllers (if structured)
├── server.js / app.js # Main server file
├── package.json
└── README.md


---

## 🏁 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/sarthak291/PRODIGY_FSD_01.git
cd PRODIGY_FSD_01
2️⃣ Install Dependencies
npm install
3️⃣ Run the Server
npm start
4️⃣ Open in Browser
http://localhost:3000

🔑 Authentication Flow:-
| Action                | Result                             |
| --------------------- | ---------------------------------- |
| User visits `/signup` | Creates account (stores user info) |
| User visits `/login`  | Enters credentials                 |
| If valid              | Redirect to dashboard              |
| If invalid            | Error message shown                |


Future:-
Added bcrypt password hashing
Added MongoDB/MySQL database
Added JWT / Session-based authentication
Added Logout feature
Added profile page & email verification

👨‍💻 Author
Sarthak
🔗 GitHub: https://github.com/sarthak291



