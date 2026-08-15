import { Link } from 'react-router-dom';
import { buttonVariants } from './ui/button';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1>Sorry the page you requested was not found</h1>
      <Link
        to='/'
        className={buttonVariants({ variant: 'destructive' })}
      >
        Go Home
      </Link>
    </div>
  );
}
