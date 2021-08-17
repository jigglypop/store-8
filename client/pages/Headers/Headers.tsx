import Header from '@client/components/Header/Header';
import { useCheck } from '@client/hooks/auth/check';

function Headers() {
  const { check, onLogout } = useCheck();
  return (
    <Header check={check} onLogout={onLogout} />
  );
}

export default Headers;