import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import QuizCreate from './quizcreate';
import QueType from './queType';


// Main Component
function DragAndDropApp() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'main-bar') {
      setDroppedItems((prevItems) => [...prevItems, active.id]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div
          style={{
            width: '200px',
            padding: '16px',
            backgroundColor: '#f0f0f0',
            borderRight: '2px solid black',
          }}
        >
          <h3>Sidebar</h3>
          <QueType id="item1" item="Item 1" />
          <QueType id="item2" item="Item 2" />
          <QueType id="item3" item="Item 3" />
        </div>

        {/* Main Bar */}
        <div style={{ flexGrow: 1, padding: '16px' }}>
          <h3>Main Bar</h3>
          <QuizCreate />
          <h4>Dropped Items:</h4>
          <ul>
            {droppedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </DndContext>
  );
}

export default DragAndDropApp;
