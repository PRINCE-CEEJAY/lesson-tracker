import { Link } from 'react-router-dom';
import { buttonVariants } from './ui/button';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

export default function Home() {
  return (
    <div className='flex flex-col justify-between p-6 items-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Welcome to the Homepage</h1>
      <Card className='w-screen h-screen flex flex-col justify-center items-center'>
        <CardTitle>
          <h1 className='font-bold italic'>Home of Lessons</h1>
        </CardTitle>
        <CardDescription>
          <span className='text-blue-500'>Where you can: </span>
        </CardDescription>
        <CardContent>
          <ul className='grid grid-cols-2 gap-4'>
            <Link
              to='/lessons'
              className={buttonVariants({ variant: 'outline' })}
            >
              View Your Lessons
            </Link>
            <Link
              to='/create'
              className={buttonVariants({ variant: 'outline' })}
            >
              Create a new Lesson
            </Link>
            <Link
              to='/update'
              className={buttonVariants({ variant: 'outline' })}
            >
              Update an Existing Lesson
            </Link>
            <Link
              to='/delete'
              className={buttonVariants({ variant: 'outline' })}
            >
              Delete a lesson
            </Link>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
