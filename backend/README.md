# Portfolio Backend

This is the backend service for the portfolio application, built with NestJS. It provides system status information through a REST API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start:dev
```

The server will run on http://localhost:3000

## API Endpoints

- `GET /system/status` - Get current system status including CPU load, memory usage, and OS information

## Requirements

- Node.js
- npm or yarn
