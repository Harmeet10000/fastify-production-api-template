export const config = {
  app: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development'
  },
  db: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/fastify_api'
  },
  metrics: {
    enabled: process.env.METRICS_ENABLED === 'true',
    path: '/metrics'
  }
}