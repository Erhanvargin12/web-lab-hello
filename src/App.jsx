import { useState } from 'react';
import Portfolio from './pages/Portfolio';
import UIKit from './pages/UIKit';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('portfolio');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`px-3 py-1 rounded-md text-sm font-semibold shadow-md transition-colors ${activeTab === 'portfolio' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
        >
          Portföy
        </button>
        <button
          onClick={() => setActiveTab('uikit')}
          className={`px-3 py-1 rounded-md text-sm font-semibold shadow-md transition-colors ${activeTab === 'uikit' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
        >
          UI Kit
        </button>
      </div>

      <div className="pt-16">
        {activeTab === 'portfolio' ? <Portfolio /> : <UIKit />}
      </div>
    </div>
  );
}

export default App;