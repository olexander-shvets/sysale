import React from 'react';
import AppContent1 from '../app-content1/app-content';
import AppContent2 from '../app-content2/app-content';
import AppContent3 from '../app-content3/app-content';

import '../app/App.css';

function App() {
  return (
    <div className="app-content">
      <AppContent1/>
      <AppContent2/>
      <AppContent3/>
    </div>
  );
}

export default App;
