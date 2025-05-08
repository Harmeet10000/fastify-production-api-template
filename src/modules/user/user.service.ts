import { db } from '../../db';
import { users } from '../../db/schema';
import { CreateUserInput } from './user.schema';

export async function createUser(input: CreateUserInput) {
  const user = await db.insert(users).values(input).returning();
  return user[0];
}

export async function findUserByEmail(email: string) {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email)
  });
  return user;
}