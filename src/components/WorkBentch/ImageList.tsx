import { useState } from "react";
import classes from "./index.module.scss";
export default function () {
    const [isDropped, setIsDropped] = useState(false);

    function handleDragEnd(event: any) {
        if (event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    return (
        <div className={classes.topBar}>
        </div>
    );
}