# 📚 Library Management System

Libapp/ <br>
│  <br>
├── .env                     # Environment variables (secret keys, DB URI)  <br>
├── index.js                 # App entry point  <br>
├── package.json             # Project metadata and dependencies  <br>
├── package-lock.json        # Exact versions of installed packages  <br>
│ <br>
├── middleware/ <br>
│   └── auth.js              # JWT verification middleware <br>
│ <br>
├── models/ <br>
│   ├── Book.js              # Book schema <br>
│   ├── Borrow.js            # Borrow history schema <br>
│   ├── Student.js           # Student user schema <br>
│   └── User.js              # Common user schema (admin/student) <br>
│ <br>
├── routes <br>
│   ├── auth.js              # Login & registration <br>
│   └── books.js             # CRUD operations for books <br>
│ <br>
├── controllers/ <br>
│   ├── userController.js    # Auth logic, token generation <br>
│   └── bookController.js    # Book logic: add, edit, delete, view <br>
│ <br>
└── utils/                   # Optional helpers <br>
    ├── hash.js              # Password hashing <br>
    ├── logger.js            # Logging system (optional) <br>
    └── validators.js        # Input validation <br>

## 🔐 Authentication Flow

<p align="center">
  [User Login/Register] <br>
  ⬇️ <br>
  [JWT Token Generated] <br>
  ⬇️ <br>
  Token added to headers: <br>
  <code>Authorization: Bearer &lt;token&gt;</code> <br>
  ⬇️ <br>
  [auth.js Middleware] <br>
  ⬇️ <br>
  Access to protected routes <br>
</p>


## 🌐 API Endpoints Table

| **Endpoint**          | **Method** | **Description**        | **Auth Required** | **User Role**   |
| --------------------- | ---------- | ---------------------- | ----------------- | --------------- |
| `/api/register`       | `POST`     | Register a new user    | ❌                 | Public          |
| `/api/login`          | `POST`     | User login             | ❌                 | Public          |
| `/api/books`          | `GET`      | Get all books          | ✅                 | Admin / Student |
| `/api/books/:id`      | `GET`      | Get a specific book    | ✅                 | Admin / Student |
| `/api/books`          | `POST`     | Add a new book         | ✅                 | Admin only      |
| `/api/books/:id`      | `PUT`      | Update book details    | ✅                 | Admin only      |
| `/api/books/:id`      | `DELETE`   | Delete a book          | ✅                 | Admin only      |
| `/api/borrow`         | `POST`     | Borrow a book          | ✅                 | Admin / Student |
| `/api/return/:id`     | `PUT`      | Return a borrowed book | ✅                 | Admin / Student |
| `/api/borrow/history` | `GET`      | View borrow history    | ✅                 | Admin / Student |


### 1. `.env`

🔒 **Purpose:** Environment configuration

* MongoDB URI
* JWT Secret
* Server Port

---

### 2. `index.js`

🚀 **Purpose:** Main server entry point

* Initializes Express app
* Connects to MongoDB
* Uses authentication middleware
* Sets up API routes

---

### 3. `package.json`

📦 **Purpose:** Project manifest

* Lists dependencies
* Defines scripts

---

### 4. `middleware/auth.js`

🛡️ **Purpose:** JWT authentication

* Validates tokens
* Protects routes

---

### 5. `models/Book.js`

📚 **Purpose:** Book schema

* title, author, isbn, category, status

---

### 6. `models/Borrow.js`

📄 **Purpose:** Borrow records

* bookId, studentId, borrowDate, returnDate

---

### 7. `models/Student.js`

🎓 **Purpose:** Student schema

* name, email, department, registration number

---

### 8. `models/User.js`

👤 **Purpose:** User schema

* name, email, password (hashed), role

---

### 9. `package-lock.json`

🔗 **Purpose:** Locks dependency versions for consistent installs

---

### 10. `routes/`

🛣️ **Purpose:** API endpoints

* `auth.js`

  * POST /login
  * POST /register
  * Issues JWT tokens

* `books.js`

  * GET /books
  * POST /books
  * PUT /books/\:id
  * DELETE /books/\:id

---

### 11. `controllers/`

🧠 **Purpose:** Business logic separate from routing

* `userController.js` — login/register logic with bcrypt and JWT
* `bookController.js` — book CRUD operations

---

### 12. `utils/` (Optional)

🧰 **Helpful utilities:**

* Password hashing
* Input validation
* Logging



📊 logger.js – Log actions/errors
## 💡 Final Thoughts<br>
✅ Well-structured backend using the MVC pattern <br>
✅ Secure JWT authentication system<br>
✅ Role-based access control<br>
✅ Easily extendable for future features like pagination, search, notifications, etc.


![1.png](./Outputs/1.png)
---
![2.png](./Outputs/2.png)  
---
![3.png](./Outputs/3.png)  
---
![4-1.png](./Outputs/4-1.png)  
---
![4-2.png](./Outputs/4-2.png)  
---
![4.png](./Outputs/4.png)  
---
![5.png](./Outputs/5.png)  
---
![8.png](./Outputs/8.png)  
---
![9-1.png](./Outputs/9-1.png)  
---
![9-2.png](./Outputs/9-2.png)  
---
![9-3.png](./Outputs/9-3.png) 
---
![10-1.png](./Outputs/10-1.png)  
---
![10-2.png](./Outputs/10-2.png)  
---
![10-3.png](./Outputs/10-3.png)  
---
