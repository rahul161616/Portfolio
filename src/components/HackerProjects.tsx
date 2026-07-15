import React from "react";

type HackerProject = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  iconColorClass: string;
};

const projects: HackerProject[] = [
  {
    title: "Bubble Burst",
    description:
      "A playful bubble-shooting game where rapid interactions and collision timing drive the score loop.",
    tags: ["Game Dev", "Collision", "Interactive"],
    href: "https://github.com/rahulsewapariyar-lang/BubbleBurst",
    iconColorClass: "text-cyan-400",
  },
  {
    title: "Collision Detection Engine",
    description:
      "A 2D physics sandbox for testing shape-vs-shape collision: AABB, circle, and mixed-shape checks rendered live with OpenGL.",
    tags: ["C++", "OpenGL", "GLFW"],
    href: "https://github.com/rahulsewapariyar-lang/Game-CollisionDetection",
    iconColorClass: "text-gray-400",
  },
  {
    title: "Ping Pong",
    description:
      "The arcade classic reimplemented with a custom render loop, paddle collision, and score tracking.",
    tags: ["C++", "OpenGL", "Game Loop"],
    href: "https://github.com/rahulsewapariyar-lang/Ping-Pong",
    iconColorClass: "text-emerald-400",
  },
  {
    title: "Rect vs Rect",
    description:
      "A focused collision demo built to validate rectangle overlap logic with a minimal test surface.",
    tags: ["C++", "Collision", "Geometry"],
    href: "https://github.com/rahulsewapariyar-lang/RectVsRect",
    iconColorClass: "text-amber-400",
  },
];

const HackerProjects: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <svg className={`w-8 h-8 mr-3 ${project.iconColorClass}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm2 4h14v12H5V7zm2 2v8h10V9H7z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-200"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default HackerProjects;
