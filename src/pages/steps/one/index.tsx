import { Loader2 } from 'lucide-react';
import { useActiveUser, useNip07 } from 'nostr-hooks';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const One = () => {
  const navigate = useNavigate();

  const { activeUser } = useActiveUser();

  useNip07();

  useEffect(() => {
    if (activeUser !== undefined) {
      navigate('/steps/two', { replace: true });
    }
  }, [activeUser, navigate]);

  if (activeUser === undefined) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Loader2 className="animate-spin" />
        <p>Waiting for login...</p>
      </div>
    );
  } else {
    return null;
  }
};
