import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyLessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    async function fetchLessons() {
      const res = await axios.get('http://localhost:3000/api/lessons');
      setLessons(res.data.data);
    }
    fetchLessons();
  }, []);

  console.log(lessons);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 min-h-screen '>
      {lessons ? (
        lessons.map((l) => (
          <div
            key={l.id}
            className='flex flex-col justify-center items-center p-2 rounded-md bg-white/30 backdrop-blur-md shadow-md'
          >
            <h1 className='font-bold text-xl uppercase'>Owner: {l.name}</h1>
            <p>{l.email}</p>
            <section>
              {l.lessons.map((item) => (
                <ul key={item.id}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <span className='flex items-center space-x-2'>
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                    <p>{new Date(item.date).toLocaleTimeString()}</p>
                  </span>
                </ul>
              ))}
            </section>
          </div>
        ))
      ) : (
        <p className='text-sm text-center'>No Lesson yet ....</p>
      )}
    </div>
  );
}
