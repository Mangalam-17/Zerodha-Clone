# Zerodha Clone

A full-stack web application that replicates the core functionalities of the Zerodha trading platform, built with the MERN stack.

## About the Project

This project is a full-stack application composed of three key components: a robust backend, a dynamic frontend, and a dedicated dashboard. It leverages the power of JavaScript across the entire stack, providing a seamless development and runtime environment.

## Technologies Used

* **M**ongoDB: A flexible NoSQL database for storing user data, stock information, and transaction records.
* **E**xpress.js: A lightweight Node.js web application framework used to build the RESTful API for the backend.
* **R**eact: A JavaScript library for building the user interface of the frontend and dashboard applications.
* **N**ode.js: A JavaScript runtime environment that powers the backend server.

## Key Features

The application is structured into three main parts:

* **Backend:** A server-side application that handles API requests, user authentication, and database interactions.
* **Frontend:** The public-facing web application where users can view information.
* **Dashboard:** A private, secure section for authenticated users, which could include features like a portfolio tracker, watchlists, and live stock data.

## Installation
Follow these steps to get a local copy of the project up and running.

**Prerequisites**
Make sure you have Node.js and npm installed on your machine.

**Steps**

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Mangalam-17/Zerodha-Clone.git](https://github.com/Mangalam-17/Zerodha-Clone.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd Zerodha-Clone
    ```

3.  Install dependencies for the backend, frontend, and dashboard:
    ```bash
    # For the backend
    cd backend
    npm install
    
    # Go back to the root directory
    cd ..
    
    # For the frontend
    cd frontend
    npm install
    
    # For the dashboard
    cd dashboard
    npm install
    ```

## Usage

To start the application, you will need to run the backend and frontend/dashboard concurrently.

1.  In one terminal, start the backend server:
    ```bash
    cd backend
    npm start
    ```

2.  In a separate terminal, start the frontend or dashboard:
    ```bash
    # To start the frontend
    cd frontend
    npm start
    
    # or to start the dashboard
    cd dashboard
    npm start
    ```

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.
