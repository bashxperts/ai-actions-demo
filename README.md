# AI Actions Demo - Node.js App Experion Training

A sample Node.js application demonstrating GitHub Actions CI/CD workflow with build, test, and run capabilities.

## 📋 Features

- ✅ Express.js REST API server
- ✅ TypeScript for type safety
- ✅ Jest testing framework with coverage
- ✅ ESLint for code quality
- ✅ GitHub Actions CI/CD workflow
- ✅ Comprehensive API endpoints

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start on `http://localhost:3000`

### Build

```bash
npm run build
```

Compiles TypeScript to JavaScript in the `dist/` directory.

### Testing

```bash
npm test
```

Runs all tests with Jest and generates coverage reports.

### Production

```bash
npm start
```

Runs the compiled application.

## 📡 API Endpoints

### GET `/`
Welcome endpoint returning app info.

```bash
curl http://localhost:3000/
```

**Response:**
```json
{
  "message": "Welcome to AI Actions Demo API",
  "version": "1.0.0",
  "status": "running"
}
```

### GET `/api/health`
Health check endpoint.

```bash
curl http://localhost:3000/api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-06-18T15:30:00Z"
}
```

### GET `/api/hello/:name`
Personalized greeting endpoint.

```bash
curl http://localhost:3000/api/hello/World
```

**Response:**
```json
{
  "message": "Hello, World!",
  "greeting": "Welcome to our Node.js app, World"
}
```

### POST `/api/echo`
Echo endpoint that returns the sent message.

```bash
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

**Response:**
```json
{
  "received": "Hello",
  "echoed": "Hello",
  "timestamp": "2026-06-18T15:30:00Z"
}
```

## 🧪 Testing

The project includes comprehensive test coverage using Jest:

```bash
npm test                    # Run all tests
npm test -- --coverage      # Run tests with coverage report
```

## 🔍 Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/build-test-run.yml`) that:

1. Checks out the code
2. Sets up Node.js 20.x
3. Installs dependencies
4. Runs linting (optional)
5. Builds the TypeScript code
6. Runs Jest tests with coverage
7. Uploads coverage reports to Codecov
8. Runs the application and displays output

The workflow triggers on:
- Push to `main` and `develop` branches
- Pull requests to `main` and `develop` branches

## 📁 Project Structure

```
.
├── src/
│   ├── index.ts          # Application entry point
│   └── app.ts            # Express app setup and routes
├── tests/
│   └── app.test.ts       # Jest test suite
├── dist/                 # Compiled JavaScript (generated)
├── .github/
│   └── workflows/
│       └── build-test-run.yml  # GitHub Actions workflow
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
└── README.md             # This file
```

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start in development mode with auto-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled app |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint |

## 📝 Environment Variables

- `PORT` - Server port (default: 3000)

## 📄 License

MIT

## 👤 Author

bashxperts
