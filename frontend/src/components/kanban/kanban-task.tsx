import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const KanbanItem = ({ itemObject, index }: any) => {
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided) => (
        <div
          className="item"
          key={itemObject.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {itemObject.title}
          {/* {itemObject.description} */}
        </div>
      )}
    </Draggable>
  );
};
