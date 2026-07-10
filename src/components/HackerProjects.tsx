import React from "react";

const HackerProjects: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm2 4h14v12H5V7zm2 2v8h10V9H7z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Collision Detection Engine</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A 2D physics sandbox for testing shape-vs-shape collision: AABB, circle,
          and mixed-shape checks rendered live with OpenGL.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">C++</span>
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">OpenGL</span>
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">GLFW</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-200">View Code</a>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm2 4h14v12H5V7zm2 2v8h10V9H7z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pong, Rebuilt from Scratch</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The arcade classic reimplemented with a custom render loop, paddle
          collision, and score tracking — no engine, just raw code.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">C++</span>
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">OpenGL</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-200">View Code</a>
        </div>
      </div>
    </>
  );
};

export default HackerProjects;
