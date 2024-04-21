import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { KanbanColumn } from './kanban-columns';
import './kanban-board.css';

const Board = () => {
  const initialColumns = {
    todo: {
      id: 'todo',
      title: 'To do',
      list: [
        { id: '123123+', title: 'text1 title' },
        { id: '123123', text: 'text2' },
        { id: '13123+', text: 'text3' },
      ],
    },
    inprogress: {
      id: 'inprogress',
      title: 'In Progress',
      list: [
        { id: '12123+', text: 'text4' },
        { id: '123+', text: 'text5' },
        { id: '12', text: 'text6' },
      ],
    },
    inreview: {
      id: 'onhold',
      title: 'In Review',
      list: [],
    },
    completed: {
      id: 'completed',
      title: 'Completed',
      list: [],
    },
  };

  const [columns, setColumns] = useState({});

  useEffect(() => {
    setValues();
  }, []);

  const setValues = () => {
    const data = initialColumns;
    setColumns(data);
  };
  const onDragEnd = ({ source, destination }) => {
    // If there's no valid destination, do nothing
    if (!destination) {
      return;
    }

    // If the draggable is dropped in the same position, do nothing
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    // If the draggable is dropped in the same column
    if (startColumn === endColumn) {
      const newTaskList = Array.from(startColumn.list);
      const [removedTask] = newTaskList.splice(source.index, 1);
      newTaskList.splice(destination.index, 0, removedTask);

      const updatedColumn = {
        ...startColumn,
        list: newTaskList,
      };

      setColumns((prevState) => ({
        ...prevState,
        [updatedColumn.id]: updatedColumn,
      }));
    } else {
      // If the draggable is moved to a different column
      const newStartList = startColumn.list.filter(
        (_, idx) => idx !== source.index,
      );
      const [draggedTask] = startColumn.list.filter(
        (_, idx) => idx === source.index,
      );

      const newEndList = Array.from(endColumn.list);
      newEndList.splice(destination.index, 0, draggedTask);

      const updatedStartColumn = {
        ...startColumn,
        list: newStartList,
      };

      const updatedEndColumn = {
        ...endColumn,
        list: newEndList,
      };

      setColumns((prevState) => ({
        ...prevState,
        [updatedStartColumn.id]: updatedStartColumn,
        [updatedEndColumn.id]: updatedEndColumn,
      }));
    }
  };

  //   const addTaskToColumn = (column) => {
  //     // New item inserted into list array
  //     const newObject = {
  //       id: uuidv4(),
  //       title: 'Test title',
  //       text: 'Test text',
  //     };
  //     console.log(column);

  //     /*
  //     console.log(column) result:
  //     Object: {
  //         id:"todo",
  //         title:"To do",
  //         list: [{etc}{etc}]
  //     }
  //     */
  //     setColumns((prev) => ({
  //       ...prev,
  //       [column.id]: {
  //         ...prev[column.id],
  //         list: [...prev[column.id].list, newObject],
  //       },
  //     }));
  //   };
  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(columns).map((column, key) => {
          return (
            <div key={key}>
              <KanbanColumn column={column} />
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Board;
