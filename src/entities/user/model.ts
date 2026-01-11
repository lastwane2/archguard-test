// User entity - can import from shared only
import { capitalize } from '../../shared/lib/utils';

export interface User {
  id: string;
  name: string;
  email: string;
}

export function formatUserName(user: User): string {
  return capitalize(user.name);
}

export function createUser(name: string, email: string): User {
  return {
    id: crypto.randomUUID(),
    name,
    email,
  };
}
