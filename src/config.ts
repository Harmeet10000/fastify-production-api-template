export const config = {
  app: {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
  },
  db: {
    url: process.env.DATABASE_URL,
  },
  metrics: {
    enabled: process.env.METRICS_ENABLED,
    path: "/metrics",
  },
};
