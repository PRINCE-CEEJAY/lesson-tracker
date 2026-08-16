import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { buttonVariants } from './ui/button';
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { ModeToggle } from './theme-toggler';

export default function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedvalue = useDebouncedValue(searchInput);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(debouncedvalue);
  }, [debouncedvalue]);

  return (
    <div className='w-screen p-2 bg-white/30 shadow-md backdrop-blur-md flex items-center justify-between'>
      {/* app Logo section */}
      <Link
        to={'/'}
        className='flex items-center space-x-3'
      >
        <img
          src='lesson-logo.jpeg'
          alt='App logo'
          width={40}
          height={40}
        />
        <h1 className='fancy'>Lesson Tracker</h1>
      </Link>
      {/* SEARCH SECTION */}
      <section className='w-sm'>
        <input
          placeholder='Search ...'
          className='w-full'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </section>

      {/* ACTIONS */}
      <section className='flex items-center space-x-3'>
        <Link
          to='/create'
          className={buttonVariants({ variant: 'outline' })}
        >
          Create Lesson
        </Link>
        <Link
          to='/lessons'
          className={buttonVariants({ variant: 'outline' })}
        >
          My lessons
        </Link>
      </section>

      {/* PROFILE */}
      <section
        className={`${buttonVariants({ variant: 'ghost' })} flex items-center space-x-2 cursor-pointer`}
        onClick={() => navigate('/profile')}
      >
        <User />
        <h1 className='font-bold space-x-3'>Prince Ceejay</h1>
        <ModeToggle />
      </section>
    </div>
  );
}
