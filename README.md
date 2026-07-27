# E-Commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4A9A57?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/nagdista-dev/e-commerce?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/github/issues/nagdista-dev/e-commerce?style=for-the-badge" alt="Issues" />
  <img src="https://img.shields.io/github/stars/nagdista-dev/e-commerce?style=for-the-badge" alt="Stars" />
</p>

A full-stack e-commerce application with product management, user authentication, and a shopping cart.

## Features

- Product listing with search and filtering
- User registration and login with JWT
- Shopping cart with persistent state
- Product reviews and ratings
- Admin product management
- Responsive design

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Redux Toolkit, React Bootstrap, Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB with Mongoose |
| Auth | JWT, Cookie-based sessions |

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
│   └── src/
│       ├── components/
│       ├── pages/
│       └── slices/     # Redux slices
└── package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
