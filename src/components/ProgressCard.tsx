import React, { useState } from "react";
import "./projects-hacker.css";

type Challenge = { name: string; level: number; done: boolean };

const initialChallenges: Challenge[] = [
  { name: "Rectangle vs Rectangle", level: 1, done: false },
  { name: "Circle vs Circle", level: 1, done: false },
  { name: "Circle vs Rectangle", level: 1, done: true },
  { name: "Player Movement", level: 1, done: false },
  { name: "Camera Follow", level: 1, done: false },

  { name: "Tile Collision", level: 2, done: false },
  { name: "Platform Physics", level: 2, done: false },
  { name: "Particle System", level: 2, done: false },

  { name: "A* Pathfinding", level: 3, done: false },
  { name: "QuadTree", level: 3, done: false },
  { name: "ECS", level: 3, done: false },
  { name: "Animation System", level: 3, done: false },

  { name: "SAT", level: 4, done: false },
  { name: "GJK", level: 4, done: false },
  { name: "BVH", level: 4, done: false },

  { name: "Physics Engine", level: 5, done: false },
];

const tierMeta: Record<number, { label: string; color: string }> = {
  1: { label: "low", color: "var(--green)" },
  2: { label: "guarded", color: "var(--green-bright)" },
  3: { label: "elevated", color: "var(--amber)" },
  4: { label: "high", color: "var(--orange)" },
  5: { label: "critical", color: "var(--red)" },
};

const ProgressCard: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);

  const toggle = (name: string) =>
    setChallenges((prev) => prev.map((c) => (c.name === name ? { ...c, done: !c.done } : c)));

  const doneCount = challenges.filter((c) => c.done).length;

  return (
    <article className="proj-card" style={{ position: "relative" }}>
      <a href="/projects/checklist.html" className="proj-card__full-link" aria-label="Open checklist" />
      <div className="proj-card__bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="proj-card__file">game_dev_roadmap.log</span>
      </div>
      <div className="proj-card__body">
        <h3 className="proj-card__name">Progressions</h3>
        <p className="proj-card__desc">Roadmap & checklist for the collision/engine experiments.</p>

        <div className="log-window" style={{ marginTop: 8 }}>
          <div className="log-window__bar">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="log-window__file">cat game_dev_roadmap.log</span>
          </div>
          <div className="log-body">
            <div className="log-progress">
              <div className="log-progress__top">
                <span>modules cleared</span>
                <span style={{ color: "var(--green-bright)" }}>{doneCount} / {challenges.length}</span>
              </div>
              <div className="log-progress__track">
                <div
                  className="log-progress__fill"
                  style={{ width: `${(doneCount / challenges.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProgressCard;
