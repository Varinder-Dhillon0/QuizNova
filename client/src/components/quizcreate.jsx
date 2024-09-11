import { useDroppable } from "@dnd-kit/core";

// Main Bar (Drop Target)
function QuizCreate({ onDrop }) {
    const { isOver, setNodeRef } = useDroppable({
      id: 'main-bar',
    });
  
    return (
      <div
        ref={setNodeRef}
        style={{
          height: '300px',
          padding: '16px',
          backgroundColor: isOver ? 'lightgreen' : 'lightgray',
          border: '2px solid black',
          textAlign: 'center',
        }}
      >
        
        Drop here
      </div>
    );
  }
  
export default QuizCreate;