# Todo List App - Backend

## Overview

This is the backend API for the Todo List App, built with **Express.js** and **Prisma** using **MySQL**. It handles CRUD operations for tasks.

## Features

1. **Task Management**:
   - Create, Read, Update, and Delete tasks.
2. **Database**:
   - Task schema includes:
     - `id`, `title`, `color`, `completed`, `createdAt`, `updatedAt`.
3. **RESTful API**:
   - Fully documented and follows REST principles.

## Tech Stack

- **Framework**: Express.js
- **Database**: Prisma with MySQL
- **Language**: TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Antartic4/todo-be todo-rjs-be
   cd todo-rjs-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file:
     ```env
     DATABASE_URL=mysql://<username>:<password>@localhost:3306/todo_db
     ```

4. Initialize the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

## Usage

- API available at `http://localhost:3001`.
- Use the provided endpoints to interact with tasks.

## Folder Structure

```
src/
├── routes/         # API routes for tasks
├── prisma/         # Prisma schema and migrations
├── utils/          # Utility functions (e.g., error handling)
├── server.ts       # Application entry point
```

## API Endpoints

1. **GET `/tasks`**:

   - Fetch all tasks.

2. **POST `/tasks`**:

   - Create a new task.
   - **Body**:
     ```json
     {
       "title": "Task title",
       "color": "#FF5733"
     }
     ```

3. **PUT `/tasks/:id`**:

   - Update a task by ID.
   - **Body**:
     ```json
     {
       "title": "Updated title",
       "color": "#28B463",
       "completed": true
     }
     ```

4. **DELETE `/tasks/:id`**:
   - Delete a task by ID.
