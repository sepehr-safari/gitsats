import { useActiveUser } from 'nostr-hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Muted } from '@/shared/components/ui/typography/muted';
import { useToast } from '@/shared/components/ui/use-toast';

export const Three = () => {
  const [username, setUsername] = useState('');

  const { activeUser } = useActiveUser();

  const { toast } = useToast();

  const navigate = useNavigate();

  const submit = () => {
    fetch(
      `https://gitsats-backend.vercel.app/api/follow?un=${username.replace('@', '')}&pk=${activeUser?.pubkey}`,
    ).then((res) => {
      if (res.status !== 200) {
        navigate('/steps/four');
      } else {
        res.json().then((data) => {
          toast({ title: 'Error', description: data.error, variant: 'destructive' });
        });
      }
    });
  };

  return (
    <>
      <Muted>Step 2 of 2</Muted>

      <p className="mt-4">You just need to enter your GitHub username to claim your Sats!</p>

      <p className="my-4">👇</p>

      <Input
        className="w-full"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Button className="my-4 w-full" onClick={() => submit()} disabled={!username}>
        Claim Sats
      </Button>

      <Muted>
        This will automatically verify if you have followed me on GitHub and will reward you with
        Sats!
      </Muted>
    </>
  );
};
