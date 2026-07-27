# E-Commerce Platform

A full-stack e-commerce application with product management, user authentication, and a shopping cart — built with React and Node.js.

## Tech Stack

### Frontend
- **React 19** with Vite
- **Redux Toolkit** for state management
- **React Bootstrap** for UI components
- **Axios** for API requests

### Backend
- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Cookie-based** session management

## Features

- Product listing with search and filtering
- User registration and login
- Shopping cart with persistent state
- Product reviews and ratings
- Admin product management
- Responsive design

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance

### Installation

```bash
git clone https://github.com/nagdista-dev/e-commerce.git
cd e-commerce
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run

```bash
# Start both frontend and backend
npm run dev

# Or separately
npm run server   # Backend on port 3001
npm run client   # Frontend on port 5173
```

### Seed Data

```bash
npm run data:import   # Import sample products
npm run data:destroy  # Remove all products
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/users/register` | Register user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users/profile` | Get profile |

## Project Structure

```
e-commerce/
├── backend/
│   ├── config/         # DB connection
│   ├── controller/     # Route handlers
│   ├── data/           # Sample data
│   ├── middleware/      # Auth & error handling
│   ├── model/          # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── slices/     # Redux slices
│   └── package.json
└── package.json
```
