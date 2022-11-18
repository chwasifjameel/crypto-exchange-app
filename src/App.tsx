import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashabord" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
