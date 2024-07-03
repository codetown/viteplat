import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import classes from "./index.module.scss";

export default function (item: any) {
    const { setNodeRef, attributes, listeners, transform, transition } =
        useSortable({
            id: item.id,
            transition: {
                duration: 500,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            },
        });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className={classes.draggableItem}
        >
            <span>{item.url}</span>
        </div>
    );
};
