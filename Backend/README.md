# Uber Clone Backend
Uber Clone Backend
This repository contains the backend implementation for the Uber Clone project, providing APIs and services to support functionalities such as user authentication, ride requests, driver management, and real-time location tracking.

Features
User Authentication: Sign up and log in using email and password.
Driver Management: Register and manage driver profiles.
Ride Requests: Request rides, assign drivers, and track ride status.
Real-Time Location Tracking: Monitor driver and rider locations during trips.
Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for data storage.
Socket.io: Real-time communication for location tracking.
JWT: JSON Web Tokens for authentication.
Getting Started
Prerequisites
Node.js (v14.x or higher)
MongoDB (v4.x or higher)

Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following variables:

env
Copy code
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
Copy code
npm start
The backend server should now be running at http://localhost:5000.

API Endpoints
User Routes
POST /api/users/register: Register a new user.
POST /api/users/login: Log in an existing user.
GET /api/users/profile: Retrieve user profile (requires authentication).
Driver Routes
POST /api/drivers/register: Register a new driver.
GET /api/drivers: Retrieve a list of available drivers.
Ride Routes
POST /api/rides/request: Request a new ride.
GET /api/rides/:id: Retrieve ride details by ID.
POST /api/rides/:id/complete: Mark a ride as completed.
Real-Time Location Tracking
Real-time location tracking is implemented using Socket.io. Clients can connect to the Socket.io server to receive live updates on driver and rider locations during a trip.


# Uber Clone Backend

This repository contains the backend implementation for the Uber Clone project, providing APIs and services to support functionalities such as user authentication, ride requests, driver management, and real-time location tracking.

## Features

- **User Authentication**: Sign up and log in using email and password.
- **Driver Management**: Register and manage driver profiles.
- **Ride Requests**: Request rides, assign drivers, and track ride status.
- **Real-Time Location Tracking**: Monitor driver and rider locations during trips.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Socket.io**: Real-time communication for location tracking.
- **JWT**: JSON Web Tokens for authentication.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/srdarshan149/Uber-Clone.git
   cd Uber-Clone/backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The backend server should now be running at `http://localhost:5000`.

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in an existing user.
- **GET /api/users/profile**: Retrieve user profile (requires authentication).

### Driver Routes

- **POST /api/drivers/register**: Register a new driver.
- **GET /api/drivers**: Retrieve a list of available drivers.

### Ride Routes

- **POST /api/rides/request**: Request a new ride.
- **GET /api/rides/:id**: Retrieve ride details by ID.
- **POST /api/rides/:id/complete**: Mark a ride as completed.

## Real-Time Location Tracking

Real-time location tracking is implemented using Socket.io. Clients can connect to the Socket.io server to receive live updates on driver and rider locations during a trip.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

## Acknowledgements

This project is inspired by various Uber clone tutorials and implementations available online. Special thanks to the open-source community for their valuable resources and contributions.
