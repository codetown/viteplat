import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { CardField } from "./Draggable";

import classes from "./index.module.scss";
export default function () {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = <CardField id="fix" />;

    function handleDragEnd(event: any) {
        if (event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={classes.mainContainer}>
                <div className={classes.widgetList}>{isDropped ? null : draggableMarkup}</div>
                <Droppable>
                    {isDropped ? draggableMarkup : null}
                </Droppable>
            </div>
        </DndContext>
    );
}