import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { KanbanItem } from './kanban-item';

export const KanbanColumn = ({
  column,
  add,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div>
      <h3>{column.title}</h3>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div className="column" ref={provided.innerRef}>
            {column.list.map((itemObject, index) => {
              return (
                <KanbanItem
                  key={itemObject.id}
                  index={index}
                  itemObject={itemObject}
                  handleEditTask={(editedTaskDetails) =>
                    handleEditTask(editedTaskDetails, column.id)
                  }
                  handleDeleteTask={(deletedTaskObject) =>
                    handleDeleteTask(deletedTaskObject, column.id)
                  }
                />
              );
            })}
            {provided.placeholder}

            <button className="add-button" onClick={() => add(column)}>
              +
            </button>
          </div>
        )}
      </Droppable>
    </div>
  );
};
