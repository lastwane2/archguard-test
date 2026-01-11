// Page - can import from widgets, features, entities, shared
import { UserCard } from '../widgets/UserCard';
import { login } from '../features/auth/login';
import { User } from '../entities/user/model';
import { Button } from '../shared/ui';

interface HomePageProps {
  user: User | null;
}

export function HomePage({ user }: HomePageProps) {
  const handleLogin = async () => {
    await login('test@test.com', 'password');
  };

  return (
    <div className="home-page">
      <h1>Welcome</h1>
      {user ? (
        <UserCard user={user} onLogout={() => {}} />
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}
