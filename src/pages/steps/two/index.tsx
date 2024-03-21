import { Button } from '@/shared/components/ui/button';
import { Muted } from '@/shared/components/ui/typography/muted';
import { useNavigate } from 'react-router-dom';

export const Two = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://github.com/sepehr-safari', '_blank');

    navigate('/steps/three');
  };

  return (
    <>
      <Muted>Step 1 of 2</Muted>

      <p className="mt-4">
        Open my GitHub profile and click on the "Follow" button to earn 1000 Sats!
      </p>

      <p className="my-4">👇</p>

      <Button className="w-full" onClick={() => handleClick()}>
        Open GitHub
      </Button>
    </>
  );
};
