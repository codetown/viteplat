import { useDroppable } from "@dnd-kit/core";
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import classes from './index.module.scss';
export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} className={classes.myDroppable} style={style}>
      {props.children}
    </div>
  );
}

export function FormDesigner() {
  const [items, setItems] = useState(['text-field', 'select-field']);

  const handleDragEnd = (event: any) => {
    const { activeId, overId } = event;

    if (activeId !== overId) {
      setItems((items: any) => {
        const oldIndex = items.indexOf(activeId);
        const newIndex = items.indexOf(overId);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Droppable onDragEnd={handleDragEnd}>
      {(provided: any) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          <SortableContext items={items}>
            {items.map((id: string) => (
              <li key={id}>{/* 这里根据id渲染具体的表单项组件 */}</li>
            ))}
          </SortableContext>
        </ul>
      )}
    </Droppable>
  );
}