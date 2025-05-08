
# 📚 MongoDB Library Database Operations

This guide demonstrates MongoDB CRUD operations on a sample `Library` database with a `books` collection.
---

## 🧱 1. Create Database and Collection

```js
// Create and switch to 'Library' database
use Library

// Create 'books' collection
db.createCollection("books")
```
![1.png](./Outputs/1.png)
---

## 📥 2. Insert Sample Data

```js
db.books.insertMany([
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "year_published": 1813,
        "genres": ["Fiction", "Romance"],
        "available": true
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year_published": 1951,
        "genres": ["Fiction", "Classic"],
        "available": true
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year_published": 1937,
        "genres": ["Fantasy", "Adventure"],
        "available": true
    },
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "year_published": 1851,
        "genres": ["Fiction", "Adventure"],
        "available": true
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "year_published": 1869,
        "genres": ["Historical Fiction", "Classic"],
        "available": true
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "year_published": -800,
        "genres": ["Epic", "Adventure"],
        "available": true
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "year_published": 1880,
        "genres": ["Fiction", "Philosophical"],
        "available": true
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year_published": 1932,
        "genres": ["Dystopian", "Science Fiction"],
        "available": true
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "year_published": 1320,
        "genres": ["Epic", "Poetry"],
        "available": true
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "year_published": 1866,
        "genres": ["Fiction", "Philosophical"],
        "available": true
    }
])
```
![2-1.png](./Outputs/2-1.png)
![2-2.png](./Outputs/2-2.png)
![2-3.png](./Outputs/2-3.png)
![2-4.png](./Outputs/2-4.png)
![2-5.png](./Outputs/2-5.png)

---

## 📚 3. Find All Books

```js
db.books.find()
```
![3-1.png](./Outputs/3-1.png)
![3-2.png](./Outputs/3-2.png)
![3-3.png](./Outputs/3-3.png)
---

## 📘 4. Find Books Published After 1950

```js
db.books.find({ year_published: { $gt: 1950 } })
```
![4.png](./Outputs/4.png)
---

## 🔎 5. Find a Book by Title

```js
db.books.findOne({ title: "The Hobbit" })
```
![5.png](./Outputs/5.png)
---

## 🔧 6. Update Year Published 

```js
db.books.updateOne(
    { title: "The Great Gatsby" },
    { $set: { year_published: 1925 } }
)
// No match – this book is not in the collection
```
![6-1.png](./Outputs/6-1.png)
![6-2.png](./Outputs/6-2.png) <br><br>
![6-3.png](./Outputs/6-3.png)
---

## 🔧 7. Set Available to False for "Moby-Dick"

```js
db.books.updateOne(
    { title: "Moby-Dick" },
    { $set: { available: false } }
)
```
![7-1.png](./Outputs/7-1.png)
![7-2.png](./Outputs/7-2.png) <br><br>
![7-3.png](./Outputs/7-3.png)
---

## 🔄 8. Add Field `checked_out: false` to Available Books

```js
db.books.updateMany(
    { available: true },
    { $set: { checked_out: false } }
)
```
![8-1.png](./Outputs/8-1.png)
![8-2.png](./Outputs/8-2.png)
![8-3.png](./Outputs/8-3.png)
![8-4.png](./Outputs/8-4.png)
![8-5.png](./Outputs/8-5.png)

---

## 🔁 9. Set `checked_out: true` for Adventure Books

```js
db.books.updateMany(
    { genres: "Adventure" },
    { $set: { checked_out: true } }
)
```
![9-1.png](./Outputs/9-1.png)
![9-2.png](./Outputs/9-2.png)
![9-3.png](./Outputs/9-3.png)
![9-4.png](./Outputs/9-4.png)
![9-5.png](./Outputs/9-5.png)

---

## 🗑 10. Delete a Book by Title

```js
db.books.deleteOne({ title: "The Odyssey" })
```
![10-1.png](./Outputs/10-1.png)
![10-2.png](./Outputs/10-2.png)
![10-3.png](./Outputs/10-3.png)
![10-4.png](./Outputs/10-4.png)

---

## 🧹 11. Delete All Books Published Before 1930

```js
db.books.deleteMany({ year_published: { $lt: 1930 } })
```
![11-1.png](./Outputs/11-1.png)
![11-2.png](./Outputs/11-2.png) |

---

## ✅ Summary

- This example uses `insertMany`, `find`, `findOne`, `updateOne`, `updateMany`, `deleteOne`, and `deleteMany`.
- Designed to be run in MongoDB Shell, Compass, or a JavaScript MongoDB environment.

---

