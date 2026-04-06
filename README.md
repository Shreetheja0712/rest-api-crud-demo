# REST API - Doubt Management System

## 📌 Overview

This project is a simple REST API built using Node.js, Express, and Prisma to demonstrate CRUD operations.

---

## 🎯 Objective

To implement and demonstrate:

* Create
* Read
* Update
* Delete
  operations using REST principles.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL / MySQL

---

## 📡 API Endpoints

### 1. Create Doubt

POST /api/doubts

### 2. Get All Doubts

GET /api/doubts

### 3. Get Doubt by ID

GET /api/doubts/:id

### 4. Update Doubt

PUT /api/doubts/:id

### 5. Delete Doubt

DELETE /api/doubts/:id

---

## 🔍 Filtering (Extra Feature)

GET /api/doubts?subject=JavaScript
GET /api/doubts?status=pending

---

## 📦 Example Request

```json id="6x1ivh"
{
  "question": "What is closure?",
  "subject": "JavaScript",
  "priority": "high"
}
```

---

## ▶️ How to Run

```bash id="3xf44e"
npm install
npx prisma migrate dev
node src/server.js
```

---

## 📁 Folder Structure

```id="z80bq0"
src/
 ├── controllers/
 ├── routes/
 ├── app.js
 └── server.js
```

---

## 🧠 Conclusion

This project successfully demonstrates REST API design and CRUD operations using Express and Prisma.

---

## 🙌 Author

Shreetheja
