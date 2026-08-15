import { Routes, Route } from 'react-router-dom';
import CreateLesson from './features/lessons/components/CreateLesson';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './features/users/components/Profile';
import MyLessons from './features/lessons/components/MyLessons';
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Routes>
        <Route
          path='/create'
          element={<CreateLesson />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/lessons'
          element={<MyLessons />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}
