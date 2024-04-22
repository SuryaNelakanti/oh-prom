import React from 'react';
import { KanbanBoard } from '../kanban/kanban-board';
import './project-details.css';

export const ProjectDetails = ({ project }) => {
  const { tasks } = project;

  return (
    <>
      <div className="projects-header">
        <h1>{project.title}</h1>
        <div>
          <p>Started on: {project.start_date}</p>
          <p>Estimated End Date: {project.estimated_end_date}</p>
        </div>
      </div>
      <p>{project.description}</p>
      <div className="projects-section">
        <h4>Tasks:</h4>
        <div className="projects-section">
          <KanbanBoard tasks={tasks} projectId={project.id} />
        </div>
      </div>
    </>
  );
};
