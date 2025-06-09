# 📚 Library Management RESTful API – ICAE 03 Practical (IT2234)
## ⚙️ Technologies Used

- **Node.js & Express** – For building RESTful APIs  
- **MongoDB & Mongoose** – For database and object modeling  
- **MongoDB Compass** – GUI to view and manage data  
- **VS Code** – Development environment  
- **Postman** – For API testing  

---

## 📁 Project Structure

project-root/<br>
│<br>
├── models/ // Mongoose schemas<br>
│ ├── Book.js<br>
│ ├── Student.js<br>
│ └── Borrow.js<br>
│<br>
├── routes/ // Route handlers<br>
│ ├── bookRoutes.js<br>
│ ├── studentRoutes.js<br>
│ └── borrowRoutes.js<br>
│<br>
├── app.js / server.js<br>
├── .env // MongoDB connection URL<br>
└── README.md<br>

---

## ✅ Task Overview & Simple Explanation

### 1️⃣ Map Models & Insert Data

- Created three Mongoose models: **Student**, **Book**, and **Borrow**
- Inserted the provided sample data into MongoDB using Compass
- Verified collections and data through **table view**
  
![1-1.png](./Outputs/1-1.png)<br>![1-2.png](./Outputs/1-2.png)<br>![1-3.png](./Outputs/1-3.png)<br>![1-4.png](./Outputs/1-4.png)<br>![1-5.png](./Outputs/1-5.png)<br>![1-6.png](./Outputs/1-6.png)
---

### 2️⃣ Filter Books by Genre

- Created an endpoint to get books based on their **genre**

![2-1.png](./Outputs/2-1.png)<br>![2-2.png](./Outputs/2-2.png)<br>![2-3.png](./Outputs/2-3.png)
---

### 3️⃣ Filter Students by Year

- Created an endpoint to get students by their **academic year**

![3-1.png](./Outputs/3-1.png)<br>![3-2.png](./Outputs/3-2.png)<br>![3-3.png](./Outputs/3-3.png)
---

### 4️⃣ Common Filtering Function

- Implemented a **reusable filtering function** in a utility or controller
- This avoids repeating code when filtering by genre or year

![4-1.png](./Outputs/4-1.png)<br>![4-2.png](./Outputs/4-2.png)<br>![4-3.png](./Outputs/4-3.png)<br>![4-4.png](./Outputs/4-4.png)<br>![4-5.png](./Outputs/4-5.png)
---

### 5️⃣ Borrow a Book (POST)

Implements borrowing logic with multiple validations:

| Validation | Description |
|------------|-------------|
| ✅ a) ID Check | Student & Book IDs must exist |
| ❌ b) Max Borrow Limit | Students can borrow **max 2 books** at a time |
| ❌ c) Reserve Copy | At least **1 book copy** must remain in library |
| ✅ d) Update Copies | If all checks pass, decrease `copiesAvailable` by 1 |
| ❌ e) Error Handling | Return clear messages if any rule fails |
