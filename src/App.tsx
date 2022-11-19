import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Dashboard, Alerts, Defend, Protect } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/defend" element={<Defend />} />
        <Route path="/protect" element={<Protect />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
