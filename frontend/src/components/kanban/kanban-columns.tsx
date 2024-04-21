import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { KanbanItem } from './kanban-task';

export const KanbanColumn = ({ column, add }: any) => {
  return (
    <div>
      <h3>{column.title}</h3>

      {/* <button onClick={() => add(column)}>Add</button> */}
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div className="column" ref={provided.innerRef}>
            <div>
              {column.list.map((itemObject, index) => {
                return (
                  <KanbanItem
                    key={itemObject.id}
                    index={index}
                    itemObject={itemObject}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};
