# Fastify Production-Ready API Template

A production-ready Fastify REST API template with comprehensive features and best practices.

## Features
* Authentication
* User management
* Job management
* Metrics visualization
* Docker support
* Automated testing
* Database migrations
* API documentation

## Technology Stack
* Node.js
* Fastify
* TypeScript
* PostgreSQL
* Drizzle ORM
* Pino Logger
* Prometheus
* Grafana
* Docker & Docker Compose

## Prerequisites
* Node.js 18+
* Docker and Docker Compose (optional)
* PostgreSQL (if not using Docker)
* pnpm (recommended) or npm

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/Harmeet10000/fastify-production-api-template.git
cd fastify-production-api-template
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development environment
```bash
docker-compose -f docker-compose.dev.yml up -d
```

4. Run migrations
```bash
pnpm run db:migrate
```

5. Start the development server
```bash
pnpm run dev
```

## Available Scripts
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run test` - Run tests
- `pnpm run db:migrate` - Run database migrations
- `pnpm run db:generate` - Generate database migrations
- `pnpm run db:seed` - Seed database with sample data
- `pnpm run db:studio` - Launch Drizzle Studio

## Project Structure
```
src/
├── config.ts           # Application configuration
├── main.ts            # Application entry point
├── db/                # Database configuration and schemas
├── modules/           # Feature modules (users, jobs, applications)
├── utils/            # Utility functions and middleware
└── test/             # Test setup and helpers
```

## Metrics and Monitoring
- Prometheus metrics at `/metrics`
- Grafana dashboards for visualization
- Default system metrics
- Custom application metrics

## License
MIT