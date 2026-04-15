# AI Tracker App

A task tracker application built with React and Express.

## Features

- Add tasks with title, due date, and category
- Mark tasks as complete/incomplete
- Delete tasks
- Categories: Personal, Work, Shopping, Health
- Clean, responsive UI
- RESTful API

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. **Navigate to the project directory**

   ```bash
   cd ai-tracker-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start in development mode**

   ```bash
   npm run dev
   ```

   This starts both the React dev server (port 3000) and Express API (port 3001).

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Run React development server
- `npm run server` - Run Express API server only
- `npm run dev` - Run both servers concurrently
- `npm run build` - Build React for production

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| DELETE | `/api/tasks/:id` | Delete a task by ID |

### Example API Usage

**Add a task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "My new task"}'
```

**Get all tasks:**
```bash
curl http://localhost:3000/api/tasks
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## Project Structure

```
ai-tracker-app/
├── app.js          # Express server and API routes
├── package.json    # Project dependencies and scripts
├── README.md       # This file
└── public/
    └── index.html  # Frontend UI
```

## License

ISC
