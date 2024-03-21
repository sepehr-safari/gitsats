import ConfettiExplosion from 'react-confetti-explosion';

export const Four = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <ConfettiExplosion
          zIndex={50}
          force={0.6}
          duration={3000}
          particleCount={200}
          width={1200}
        />
      </div>

      <h1 className="text-4xl">🎉</h1>

      <p className="my-4 text-xl">You have successfully claimed your Sats! 🚀</p>

      <p className="opacity-70">
        This is a demo of how you can use Nostr & Bitcoin to practice{' '}
        <a
          href="https://value4value.info/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Value4Value
        </a>
      </p>
    </>
  );
};
