# Node.js MySQL REST API

A REST API built with Node.js, Express, and MySQL as a learning project to understand backend development fundamentals.

## Project Overview

This project demonstrates a simple but functional REST API that connects to a MySQL database using Sequelize ORM. It includes models for posts, users, categories, and comments with all CRUD operations available through RESTful endpoints.

## What I Learned

- Setting up a Node.js project with Express
- Creating and configuring a MySQL database connection
- Implementing the MVC (Model-View-Controller) pattern
- Using Sequelize ORM for database operations
- Creating database migrations for versioning
- Building RESTful API endpoints
- Testing API endpoints with Postman
- Git workflow and GitHub repository management

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MySQL**: Relational database
- **Sequelize**: ORM for MySQL
- **MAMP**: Local server environment
- **Postman**: API testing tool

## Project Structure

```
nodejs-mysql-api/
├── config/                  # Database configuration
├── controllers/
│   ├── post.controller.js   # Post controller with CRUD operations
│   └── test.controller.js   # Test controller
├── models/
│   ├── categories.js        # Category model
│   ├── comments.js          # Comment model
│   ├── index.js             # Models index
│   ├── post.js              # Post model
│   └── user.js              # User model
├── migrations/              # Database migrations
│   ├── 20250327152439-create-post.js
│   ├── 20250327153137-create-user.js
│   ├── 20250327153254-create-categories.js
│   └── 20250327153640-create-comments.js
├── routes/
│   ├── post.js              # Post routes
│   └── test.js              # Test routes
├── app.js                   # Express application setup
└── server.js                # Server entry point
```

## API Endpoints

- **Posts**
    - `GET /api/posts`: Get all posts
    - `GET /api/posts/:id`: Get a post by ID
    - `POST /api/posts`: Create a new post
    - `PUT /api/posts/:id`: Update a post
    - `DELETE /api/posts/:id`: Delete a post

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/MrkAnthony/nodejs-mysql-api.git
cd nodejs-mysql-api
```

2. Install dependencies:
```bash
npm install
```

3. Start MAMP and create a MySQL database.

4. Create a `.env` file in the root directory with your database configuration:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=your_database_name
DB_PORT=8889
```

5. Run the migrations:
```bash
npx sequelize-cli db:migrate
```

6. Start the server:
```bash
npm start
```

## Testing with Postman

1. Open Postman
2. Import the collection (if available) or create new requests to test the API endpoints
3. Set the request URL to `http://localhost:3000/api/posts` (or whichever endpoint you're testing)
4. Select the appropriate HTTP method (GET, POST, PUT, DELETE)
5. For POST and PUT requests, add your JSON data in the request body
6. Send the request and verify the response

## Future Improvements

- Add authentication with JWT
- Implement validation for request data
- Add error handling middleware
- Create more comprehensive test cases
- Add pagination for list endpoints
- Implement filtering and searching
- Add documentation with Swagger

## Learning Resources Used

- Node.js documentation
- Express documentation
- Sequelize documentation
- Various YouTube tutorials and articles on building RESTful APIs with Node.js and MySQL

---

This project was created as a learning exercise to understand the fundamentals of building a RESTful API with Node.js and MySQL.