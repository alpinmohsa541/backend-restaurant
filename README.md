# Restaurant Reservation API

## Overview
Restaurant Reservation API is a backend service built using Node.js and Express.js for managing users, restaurants, and reservations in an online restaurant reservation system. This service includes user registration, login, profile management, viewing restaurant lists, and creating reservations.

---

## Features
- **User Management**:
  - User registration (`POST /api/users/register`)
  - User login (`POST /api/users/login`)
  - View user profile (`GET /api/users/profile`)
  - Update user profile (`PUT /api/users/profile`)

- **Restaurant Management**:
  - View list of restaurants (`GET /api/restaurants`)

- **Reservation Management**:
  - Create a reservation (`POST /api/reservations`)

---

## Installation

### Prerequisites:
- [Node.js](https://nodejs.org/) installed.
- [MySQL](https://www.mysql.com/) database set up.

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd restaurant-reservation-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Add the following configuration:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=<your_password>
     DB_NAME=restaurant_reservation
     PORT=3000
     ```

4. Initialize the database:
   - Create a database named `restaurant_reservation`.
   - Create tables based on the following structure:

     ```sql
     CREATE TABLE Users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL
     );

     CREATE TABLE Restaurants (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         location VARCHAR(255) NOT NULL,
         description VARCHAR(255)
     );

     CREATE TABLE Reservations (
         id INT AUTO_INCREMENT PRIMARY KEY,
         userId INT NOT NULL,
         restaurantId INT NOT NULL,
         reservationDate TIMESTAMP NOT NULL,
         FOREIGN KEY (userId) REFERENCES Users(id),
         FOREIGN KEY (restaurantId) REFERENCES Restaurants(id)
     );
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. The server will run on `http://localhost:3000`.

---

## API Endpoints

### Users
- **Register User**
  - **Endpoint**: `POST /api/users/register`
  - **Body**:
    ```json
    {
      "username": "john_doe",
      "password": "securepassword123"
    }
    ```

- **Login User**
  - **Endpoint**: `POST /api/users/login`
  - **Body**:
    ```json
    {
      "username": "john_doe",
      "password": "securepassword123"
    }
    ```

- **Get Profile**
  - **Endpoint**: `GET /api/users/profile`
  - **Query Parameters**:
    - `userId` (required): ID of the user.

- **Update Profile**
  - **Endpoint**: `PUT /api/users/profile`
  - **Body**:
    ```json
    {
      "userId": 1,
      "username": "updated_username",
      "password": "newpassword123"
    }
    ```

### Restaurants
- **Get List of Restaurants**
  - **Endpoint**: `GET /api/restaurants`

### Reservations
- **Create Reservation**
  - **Endpoint**: `POST /api/reservations`
  - **Body**:
    ```json
    {
      "userId": 1,
      "restaurantId": 2,
      "reservationDate": "2025-01-10T19:00:00"
    }
    ```

---

## Folder Structure
```plaintext
restaurant-reservation-api/
├── src/
│   ├── config/
│   │   └── db.js                # Database configuration
│   ├── controllers/
│   │   ├── userController.js    # User-related logic
│   │   ├── restaurantController.js # Restaurant-related logic
│   │   └── reservationController.js # Reservation-related logic
│   ├── routes/
│   │   ├── userRoutes.js        # User API routes
│   │   ├── restaurantRoutes.js  # Restaurant API routes
│   │   └── reservationRoutes.js # Reservation API routes
│   ├── app.js                   # Express app initialization
│   └── server.js                # Server startup
├── .env                         # Environment variables
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

---

## Running Tests
To test the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/), send HTTP requests to the appropriate endpoints as described above.

---

## Future Improvements
- Add authentication using JWT.
- Implement pagination for restaurant lists.
- Add more robust error handling.
- Write unit tests for API endpoints.

---

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md) if available.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

