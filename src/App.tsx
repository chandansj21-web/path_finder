import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import After10th from './pages/After10th';
import After12th from './pages/After12th';
import Explore from './pages/Explore';
import Exams from './pages/Exams';
import SkillTest from './pages/SkillTest';
import Roadmap from './pages/Roadmap';
import Videos from './pages/Videos';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="chat" element={<Chat />} />
          <Route path="after-10th" element={<After10th />} />
          <Route path="after-12th" element={<After12th />} />
          <Route path="explore" element={<Explore />} />
          <Route path="exams" element={<Exams />} />
          <Route path="skill-test" element={<SkillTest />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="videos" element={<Videos />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
