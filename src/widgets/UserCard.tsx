// Widget - can import from features, entities, shared
import { User } from '../entities/user/model';
import { getProfileDisplayName } from '../features/user/profile';
import { Button } from '../shared/ui';

interface UserCardProps {
  user: User;
  onLogout: () => void;
}

export function UserCard({ user, onLogout }: UserCardProps) {
  return (
    <div className="user-card">
      <span>{getProfileDisplayName(user)}</span>
      <Button onClick={onLogout} variant="secondary">
        Logout
      </Button>
    </div>
  );
}
