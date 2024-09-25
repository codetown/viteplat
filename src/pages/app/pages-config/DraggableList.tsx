import { FC, useEffect, useState } from "react";
import { DragEndEvent, DragMoveEvent, DndContext, useSensors, MouseSensor, useSensor } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

import DraggableItem from "./DraggableItem";

import classes from "./index.module.scss";

const DraggableList: FC = () => {
    const [list, setList] = useState<any>([]);

    useEffect(() => {
        setList(
            Array.from({ length: 31 }, (_, index) => ({
                id: index + 1,
                url: `${index}10.jpg`,
            }))
        );
    }, []);

    const getMoveIndex = (array: any[], dragItem: DragMoveEvent) => {
        const { active, over } = dragItem;
        const activeIndex = array.findIndex((item) => item.id === active.id);
        const overIndex = array.findIndex((item) => item.id === over?.id);

        // 处理未找到索引的情况
        return {
            activeIndex: activeIndex !== -1 ? activeIndex : 0,
            overIndex: overIndex !== -1 ? overIndex : activeIndex,
        };
    };

    const dragEndEvent = (dragItem: DragEndEvent) => {
        const { active, over } = dragItem;
        if (!active || !over) return; // 处理边界情况

        const moveDataList = [...list];
        const { activeIndex, overIndex } = getMoveIndex(moveDataList, dragItem);

        if (activeIndex !== overIndex) {
            const newDataList = arrayMove(moveDataList, activeIndex, overIndex);
            setList(newDataList);
        }
    };

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );
    return (
        <DndContext onDragEnd={dragEndEvent} modifiers={[restrictToParentElement]} sensors={sensors}>
            <SortableContext
                items={list.map((item: any) => item.id)}
                strategy={rectSortingStrategy}
            >
                <div className={classes.dragContainer}>
                    {list.map((item: any) => (
                        <DraggableItem key={item.id} item={item} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default DraggableList;
