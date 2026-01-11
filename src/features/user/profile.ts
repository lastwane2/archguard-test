// User feature - can import from entities, shared
import { User, formatUserName } from '../../entities/user/model';

export function getProfileDisplayName(user: User): string {
  return `@${formatUserName(user).toLowerCase()}`;
}

export function isEmailValid(email: string): boolean {
  return email.includes('@');
}
