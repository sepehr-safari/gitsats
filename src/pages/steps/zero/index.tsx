import { Button } from '@/shared/components/ui/button';
import { Muted } from '@/shared/components/ui/typography/muted';
import { Link } from 'react-router-dom';

export const Zero = () => {
  return (
    <>
      <p className="mb-2 text-xl">Are you ready to earn some Sats?</p>

      <Muted>Let's get started by logging in with your Browser Extension!</Muted>

      <Button className="mt-4 block" asChild>
        <Link to="/steps/one" replace>
          Login with Extension (e.g. Alby, nos2x, etc.)
        </Link>
      </Button>
    </>
  );
};
