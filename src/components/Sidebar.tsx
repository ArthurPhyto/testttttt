import React from 'react';
import { useStore } from '../store/useStore';
import { FolderKanban, Plus } from 'lucide-react';

export const Sidebar = () => {
  const { projects, currentProject, setCurrentProject } = useStore();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-full">
          <Plus size={20} />
        </button>
      </div>
      <div className="space-y-2">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setCurrentProject(project)}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
              currentProject?.id === project.id
                ? 'bg-orange-50 text-orange-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FolderKanban size={18} />
            <span>{project.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};