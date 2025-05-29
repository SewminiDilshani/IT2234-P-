# 🚀 MongoDB Department-Employee API
A simple API built with MongoDB to manage:

📂 Departments

👩‍💼 Employees

💰 ETFs

🏗️ Projects

This README guides you through inserting data, creating relationships, and accessing endpoints using Postman.

## 1️⃣ 📂👩‍💼💰🏗️ Get All Departments, Employees, ETF, Projects
✅ Returns a list of all Departments, Employees, ETF, Projects Details.

![1-1.png](./Outputs/1-1.png)<br>![1-2.png](./Outputs/1-2.png)<br>![1-3.png](./Outputs/1-3.png)<br>![1-4.png](./Outputs/1-4.png)<br>![1-5.png](./Outputs/1-5.png)
---

## 2️⃣ 🆔📂 Get Department by ID
✅ Replace :id with the department's ObjectId.

![1-6.png](./Outputs/1-6.png)
---

## 3️⃣ 👥📂 Get Employees in a Department
✅ Returns all employees with the matching departmentId.

![1-7.png](./Outputs/1-7.png)
---

## 4️⃣ 🔢👩‍💼 Get Number of Employees in One Department
✅ Count how many employees belong to one department.

![1-8.png](./Outputs/1-8.png)
---

## 5️⃣ 📊📂 Show Employee Count per Department
✅ Uses aggregation to group and count employees per department.

![1-9.png](./Outputs/1-9.png)
---

## 6️⃣ 🧑‍💼📋👨‍🔧 Get Employees by Department ID
✅ Returns a list of employees filtered by department ID, showing only:<br>
 Employee ID<br>
 Employee Name<br>
 Department Name<br>
📌 Sorted in descending order by employee name.

![1.png](./Outputs/1.png)
---

## 7️⃣ 🏢🔢 Count Employees in Each Department
✅ Aggregates all departments and counts how many employees belong to each.

![2.png](./Outputs/2.png)
---

## 8️⃣ 🧑‍💼📈 Count Projects per Employee
✅ Returns a list of employees along with the number of current projects they are working on.

![3.png](./Outputs/3.png)
---
