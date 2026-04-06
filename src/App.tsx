import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import { getLessonById } from './data/lessons';
import { markCompleted } from './lib/progression';

function LessonRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = id ? getLessonById(id) : undefined;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-text-secondary">Lesson not found.</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <LessonPage
      key={lesson.id}
      lesson={lesson}
      onBack={() => navigate('/')}
      onComplete={(lessonId) => markCompleted(lessonId)}
    />
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lesson/:id" element={<LessonRoute />} />
    </Routes>
  );
}
