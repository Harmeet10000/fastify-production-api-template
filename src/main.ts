import { config } from './config';
import { buildServer } from './utils/server';

async function main() {
  const server = await buildServer();

  try {
    await server.listen({ port: config.app.port });
    console.log(`Server listening on port ${config.app.port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();