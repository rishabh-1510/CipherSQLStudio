# CipherSQLStudio

A browser-based SQL learning platform where users can practice SQL queries against pre-uploaded assignments, execute queries in real time, and receive AI-powered hints .

## 🚀 Features

* **Assignment Listing Page** – View SQL problems with difficulty and description
* **Assignment Attempt Interface**
  * Question panel
  * Sample data viewer
  * Monaco SQL editor
  * Query results panel
  * AI hint generation
* **Real-time** – Queries run against a PostgreSQL database
* **Error Handling** – Invalid SQL queries show meaningful error messages
* **AI Hints** – Uses Gemini API to provide guidance without revealing full solutions
* **Responsive UI** – Built with SCSS using a mobile-first approach

---

## Tech Stack
### Frontend

* React (Vite)
* Monaco Editor
* Axios
* SCSS 

### Backend

* Node.js
* Express.js

### Databases

* PostgreSQL (SQL execution sandbox)

### AI Integration
* Google Gemini API

---

## Project Folder Structure

```
CipherSQLStudio
 ├ backend
 │   ├ config
 │   │   └ db.js
 │   ├ routes
 │   │   ├ assignment.routes.js
 │   │   ├ sample.routes.js
 │   │   └ hint.routes.js
 │   ├ server.js
 │   └ .env
 │
 ├ frontend
 │   ├ src
 │   │   ├ components
 │   │   │   ├ SqlEditor.jsx
 │   │   │   └ SampleDataViewer.jsx
 │   │   ├ pages
 │   │   │   ├ AssignmentsPage.jsx
 │   │   │   └ AttemptPage.jsx
 │   │   ├ styles
 │   │   │   ├ _variables.scss
 │   │   │   ├ _mixins.scss
 │   │   │   └ main.scss
 │   │   ├ App.jsx
 │   │   └ main.jsx
 │
 ├ .env.example
 └ README.md
```

---

## Installation
### 1. Clone the Repository

```
git clone <your_repo_link>
cd CipherSQLStudio
```

---

### 2. Backend Setup

```
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---



Create a `.env` file in the backend directory.

Example:

```
POSTGRES_URI=your_postgres_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

The repository includes `.env.example` for reference.


## AI Hint System

The hint system integrates with the Gemini API.
Prompts are engineered to provide **hints only**, not full SQL solutions.

Example prompt:

```
You are an SQL tutor.
Give a hint only, not the full solution.

Assignment: Find students older than 20
Student Query: SELECT * FROM students
```

---

##  Data Flow Diagram

User writes SQL query
↓
React Monaco Editor
↓
Execute Query Button
↓
Frontend sends API request
↓
Express backend receives query
↓
Query validation
↓
PostgreSQL executes query
↓
Results returned to frontend
↓
React updates state and renders table

*(Hand Written is also present)*

---

##  Responsive Design

The UI is built with **mobile-first SCSS** using breakpoints:

* 320px – Mobile
* 641px – Tablet
* 1024px – Desktop
* 1281px – Large screens

SCSS features used:

* Variables
* Mixins
* Nesting
* Partial files

---
