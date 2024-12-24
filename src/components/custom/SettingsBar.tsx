import React from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const SettingsAndAbout: React.FC = () => {
  return (
    <div className='flex h-[100vh]'>
      {/* Settings Bar */}
      <div
        className='bg-zinc-400 flex flex-col gap-2 p-2'
      >
        <h1 className='text-center font-bold p-2'>
          Settings
        </h1>
        <Button
          onClick={() => toast("Input Subject Clicked")}
        >
          Input Subject
        </Button>
        <Button
          onClick={() => toast("Profile Clicked")}
        >
          Profile
        </Button>
        <Button
          onClick={() => toast("Log Out Clicked")}
        >
          Log Out
        </Button>
      </div>

      {/* About College Section */}
      <div
        className='flex-grow p-4 bg-white'
      >
        <h1 className='text-center font-extrabold text-sky-950 text-4xl p-4'>About College</h1>
        <p className='text-muted-foreground text-wrap text-base leading-8'>
          Welcome to our esteemed institution! Our college is committed to
          fostering academic excellence and personal growth. With state-of-the-art
          facilities, experienced faculty, and a vibrant campus life, we strive to
          provide an unparalleled educational experience.
        </p>
        <p className='text-muted-foreground text-wrap text-base leading-8'>
          Established in 1990, our college has been a beacon of knowledge, offering
          a diverse range of programs in arts, science, and technology. We believe
          in nurturing future leaders who are not only academically proficient but
          also socially responsible.
        </p>
        <p className='text-muted-foreground text-wrap leading-8 text-base'>
          Join us to embark on a journey of learning, innovation, and success!
        </p>
      </div>
    </div>
  );
};

export default SettingsAndAbout;
