// Auth feature - can import from entities, shared
import { User, createUser } from '../../entities/user/model';
import { debounce } from '../../shared/lib/utils';

export async function login(email: string, password: string): Promise<User> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return createUser('John Doe', email);
}

export const debouncedLogin = debounce(login, 300);
