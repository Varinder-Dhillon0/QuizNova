import { useDraggable } from "@dnd-kit/core";

// Sidebar Item (Draggable Component)
export default function QueType({ id, item }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id,
    });
  
    const style = {
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
      opacity: isDragging ? 0.5 : 1,
      padding: '8px',
      margin: '4px',
      backgroundColor: 'lightblue',
      cursor: 'pointer',
      border: '1px solid black',
    };
  
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {item}
      </div>
    );
  }