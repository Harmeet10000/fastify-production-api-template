# Commands Reference

## Development

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# Install dependencies
pnpm install

# Run database migrations
pnpm run db:migrate

# Start development server
pnpm run dev

# Generate database types
pnpm run db:generate

# Seed database with test data
pnpm run db:seed
```

## Testing

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test -- --coverage
```

## Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Build Docker image
docker build -t fastify-api .

# Run Docker container
docker run -p 3000:3000 fastify-api
```

## Database

```bash
# Connect to database
psql postgresql://postgres:postgres@localhost:5432/fastify_api

# View database schema
pnpm run db:studio
```

## Deployment

```bash
# Deploy to Railway
railway up

# Deploy to Fly.io
fly deploy
```