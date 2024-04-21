import React from 'react';
import './project-details.css';
import Board from '../kanban/kanban-board';

export const ProjectDetails = ({ project }) => {
  console.log(project);

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
          <Board />
          {/* {project.tasks.map((task, key) => (
            <div className="projects-section" key={task.title + key}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};
