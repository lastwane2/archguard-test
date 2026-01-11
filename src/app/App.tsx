// App - top layer, can import from everything below
import { HomePage } from '../pages/HomePage';
import { User } from '../entities/user/model';

export function App() {
  const user: User | null = null;

  return (
    <div className="app">
      <HomePage user={user} />
    </div>
  );
}
