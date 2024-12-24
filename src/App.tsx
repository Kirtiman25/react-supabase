import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from '@/components/custom/Students';
import Home from '@/components/custom/Home';
import Layout from './Layout';
import SettingsBar from './components/custom/SettingsBar';
import About from '@/components/custom/about'; // Corrected component import

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/students" element={<Home />} />
          <Route path="/settings" element={<SettingsBar />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
