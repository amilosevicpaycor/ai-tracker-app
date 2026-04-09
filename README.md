# Sample Tracker App

A simple task tracker application built with Node.js and Express that allows users to add, view, and delete tasks.

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Clean, responsive UI
- RESTful API

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. **Clone or navigate to the project directory**

   ```bash
   cd ai-tracker-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

To run the app in development mode with auto-restart on file changes:

```bash
npm run dev
```

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
