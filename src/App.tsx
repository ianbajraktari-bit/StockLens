import LessonPage from "./pages/LessonPage";
import { appleLesson } from "./data/lessons";

export default function App() {
  return <LessonPage lesson={appleLesson} />;
}