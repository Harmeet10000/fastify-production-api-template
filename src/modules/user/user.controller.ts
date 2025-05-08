import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserInput, LoginInput } from './user.schema';
import { createUser, findUserByEmail } from './user.service';

export async function createUserHandler(
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply
) {
  const user = await createUser(request.body);
  return reply.code(201).send(user);
}

export async function loginHandler(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  const user = await findUserByEmail(request.body.email);
  if (!user) {
    return reply.code(401).send({ message: 'Invalid credentials' });
  }
  return reply.code(200).send({ token: 'jwt-token' });
}