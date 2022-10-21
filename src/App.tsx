import HomePage from './components/pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetailPage from './components/pages/CardDetailPage/CardDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/:id' element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
