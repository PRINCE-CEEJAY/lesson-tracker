import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const lessonSchema = z.object({
  title: z.string().min(5, 'title must exceed 5 characters'),
  imageUrl: z.string().optional(),
  description: z.string().min(10, 'description must exceed 10 characters'),
  date: z.number(),
});

type lessonType = z.infer<typeof lessonSchema>;

export default function CreateLesson() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<lessonType>({
    resolver: zodResolver(lessonSchema),
    defaultValues: {
      title: '',
      imageUrl: '',
      description: '',
      date: Date.now(),
    },
  });

  function onSubmit(data: lessonType) {
    console.log(data);
    // reset form after 1 second
    setTimeout(() => {
      reset();
      navigate('/lessons');
    }, 1000);
  }
  return (
    <Card className='flex flex-col items-center justify-center h-[90%] w-full'>
      <CardTitle>
        <h1 className='text-5xl font-bold'>Create a lesson</h1>
      </CardTitle>
      <CardDescription>
        Create your persistent lesson logs to be tracked for you
      </CardDescription>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center justify-center space-y-6'
        >
          <div>
            <label>Title: </label>
            <input
              {...register('title')}
              placeholder='Enter Lesson Title'
            />
            {errors.title && (
              <p className='text-red-500 text-sm'>{errors.title.message}</p>
            )}
          </div>
          <div>
            <label>Description: </label>
            <textarea
              {...register('description')}
              placeholder='Describe what you learnt'
              rows={6}
            />
            {errors.description && (
              <p className='text-red-500 text-sm'>
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label>Lesson Image URL: </label>
            <input
              {...register('imageUrl')}
              placeholder='Enter Lesson image url if any'
            />
            {errors.imageUrl && (
              <p className='text-red-500 text-sm'>{errors.imageUrl.message}</p>
            )}
          </div>
          <CardAction className='w-full'>
            <Button
              type='submit'
              className={'w-full cursor-pointer'}
            >
              {isSubmitted ? <Spinner /> : 'Submit'}
            </Button>
          </CardAction>
        </form>
      </CardContent>
    </Card>
  );
}
