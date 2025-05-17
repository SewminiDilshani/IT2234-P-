# 📘 StudentApp

A beginner-friendly Node.js application setup that leverages **Express.js**, **Mongoose**, and **Nodemon**. This project serves as a foundation for developing RESTful APIs connected to MongoDB.

---

## 📁 Project Setup Instructions

### 🔹 Step 1: Initialize the Project

Run the following command to create a `package.json` file, which holds metadata and dependencies for the project:

```bash
npm init
```

Follow the prompts or press Enter to accept default values. This creates the initial structure and configuration.

---

### 🔹 Step 2: Install Required Packages

#### ✅ Express
Used to set up the web server and routing.

```bash
npm install express
```

#### ✅ Nodemon
Used in development to automatically restart the server on file changes.

```bash
npm install nodemon
```

#### ✅ Mongoose
Used to interact with MongoDB using an object-oriented approach.

```bash
npm install mongoose
```
![1-1.png](./Outputs/1-1.png)<br>![1-2.png](./Outputs/1-2.png)<br>![1-3.png](./Outputs/1-3.png)
--
## 📄 File Descriptions

### `index.js`

- Initializes the Express app.
- Connects to MongoDB at `mongodb://localhost:27017/studentInfoDB`.
- Uses JSON middleware.
- Imports course routes from `Course.js`.
- Listens on port `3004`.

### `Course.js`

- Defines a Mongoose schema for a `Course` with fields:
  - `code`: String
  - `name`: String
  - `credits`: Number
  - `description`: String
- Creates a `Course` model named `courses`.
- Saves a sample course (`webservice`) to the database.
- Exports the model.

---
![6-1.png](./Outputs/6-1.png)<br>![6-2.png](./Outputs/6-2.png)<br>![3-4.png](./Outputs/3-4.png)<br>![3-1.png](./Outputs/3-1.png)<br>![3-2.png](./Outputs/3-2.png)<br>![3-3.png](./Outputs/3-3.png)
--

## 📫 Sample Course Data

```json
{
  "code": "IT2234",
  "name": "Practical for WebService",
  "credits": 3,
  "description": "Build a REST API with NodeJS technology"
}
```
### 1. **GET /** – Fetch All Courses
- **Description**: Retrieves all courses from the database.
- **Response**: Returns an array of course objects or a 404 message if none found.

```bash
📫 Postman Example
GET localhost:3001/course
```
![5-1.png](./Outputs/5-1.png)<br>![4-1.png](./Outputs/4-1.png)<br>![4-2.png](./Outputs/4-2.png)
--

### 2. **GET /:id** – Fetch Course by ID
- **Description**: Retrieves a single course using its MongoDB `_id`.
- **Response**: Returns the course object or a 404 message if not found.

```bash
📫 Postman Example
GET localhost:3004/course/68285e8b5fd53dccdcf87b0f
```
![5-2.png](./Outputs/5-2.png)<br>![4-3.png](./Outputs/4-3.png)
--

### 3. **GET /code/:cid** – Fetch Course by Code
- **Description**: Retrieves all courses matching a specific course `code` (e.g., CS101).
- **Response**: Returns matched course(s) or a 404 message if none found.

```bash
📫 Postman Example
GET localhost:3004/course/code/IT2212
```
![5-3.png](./Outputs/5-3.png)<br>![4-4.png](./Outputs/4-4.png)
--

