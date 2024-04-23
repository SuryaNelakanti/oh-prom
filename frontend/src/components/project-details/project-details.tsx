import React from 'react';
import { KanbanBoard } from '../kanban/kanban-board';
import './project-details.css';
import { TaskStatus } from '../../api/tasks/types';

const calculateProgress = (tasks) => {
  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.DONE,
  );
  const completedTaskLength = completedTasks.length;
  const totalTaskLength = tasks.length;
  if (totalTaskLength > 0) {
    return (completedTaskLength * 100) / totalTaskLength;
  }
  return 0;
};

export const ProjectDetails = ({ project }) => {
  const { tasks } = project;

  return (
    <>
      <div className="projects-header">
        <h1>{project.title}</h1>
        <div>
          <p>Started on: {project.start_date}</p>
          <p>Estimated End Date: {project.estimated_end_date}</p>
          <p>Progress: {calculateProgress(project.tasks)}%</p>
        </div>
      </div>
      <p>{project.description}</p>

      <div className="projects-section">
        <h2>Tasks:</h2>
        <KanbanBoard tasks={tasks} projectId={project.id} />
      </div>
    </>
  );
};
