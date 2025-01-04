# Ecommerce Scalable Backend

This repository contains the backend implementation for a scalable ecommerce application. The architecture is designed using microservices to ensure modularity, scalability, and maintainability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Microservices Overview](#microservices-overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Microservices Architecture**: Decoupled services for user management, product handling, orders, shopping cart, notifications, and a gateway for API routing.
- **Scalability**: Each service can be scaled independently to handle increased load.
- **Dockerized Services**: Containerized using Docker for consistent environments and easy deployment.
- **API Gateway**: Centralized entry point for managing and routing requests to appropriate services.

## Tech Stack

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web application framework for Node.js.
- **Docker**: Containerization platform for packaging applications.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Nodemailer**: Module for sending emails.

## Microservices Overview

1. **User Service**: Manages user registration, authentication, and profile management.
2. **Product Service**: Handles product listings, categories, and inventory management.
3. **Order Service**: Manages order creation, status updates, and order history.
4. **Shopping Cart Service**: Manages users' shopping carts, including adding/removing items.
5. **Notification Service**: Sends email and SMS notifications to users.
6. **Gateway**: Serves as the API gateway, routing requests to the appropriate services.

## Architecture

The application follows a microservices architecture, with each service running independently and communicating through HTTP. Docker is used to containerize each service, ensuring consistency across different environments.

## Prerequisites

- **Docker**: Ensure Docker is installed on your system. You can download it from the [official website](https://www.docker.com/get-started).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SairajGujar/Ecommerce-Scalable-Backend.git
   cd Ecommerce-Scalable-Backend

This project is an implementation of idea taken through Roadmap.sh
https://roadmap.sh/projects/scalable-ecommerce-platform



