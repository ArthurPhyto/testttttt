import React from 'react';
import { Sidebar } from './components/Sidebar';
import { URLTable } from './components/URLTable';
import { useStore } from './store/useStore';
import { Plus } from 'lucide-react';

function App() {
  const { currentProject, randomUrls } = useStore();

  const handleDeleteUrl = (id: string) => {
    // Implement delete functionality
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        {currentProject ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                {currentProject.name}
              </h1>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-700">
                <Plus size={20} />
                <span>New URL</span>
              </button>
            </div>
            <URLTable urls={randomUrls} onDelete={handleDeleteUrl} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">
              Select a project to get started
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;