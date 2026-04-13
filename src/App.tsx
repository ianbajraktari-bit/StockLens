import { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import LessonRunner from './pages/LessonRunner';
import { getLessonById } from './data/lessons';
import { markCompleted } from './lib/progression';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LessonRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = id ? getLessonById(id) : undefined;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
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
    <LessonRunner
      key={lesson.id}
      lesson={lesson}
      onBack={() => navigate('/')}
      onComplete={(lessonId, correct, total) => markCompleted(lessonId, correct, total)}
    />
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:id" element={<LessonRoute />} />
      </Routes>
    </ErrorBoundary>
  );
}
