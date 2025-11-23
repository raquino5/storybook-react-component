import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { BasicInfo } from './sections/BasicInfo';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { Resources } from './sections/Resources';
import { DeveloperSetup } from './sections/DeveloperSetup';
import { Text } from './components/Text/Text';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="App">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<BasicInfo />} />

            <Route path="/work" element={<Work />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/resources" element={<Resources />} />

            <Route path="/setup" element={<DeveloperSetup />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <Text size="small">© {currentYear} Ralph Aquino</Text>
        </footer>
      </div>
    </Router>
  );
}

export default App;
