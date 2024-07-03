import { useDraggable } from "@dnd-kit/core";
import classes from './index.module.scss';
export function Draggable(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "draggable",
    });
    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}

export function TextField() {
    return (
        <Draggable id="text-field">
            <div className="draggable-item">文本输入框</div>
        </Draggable>
    );
}

export function SelectField() {
    return (
        <Draggable id="select-field">
            <div className="draggable-item">下拉选择框</div>
        </Draggable>
    );
}

export function CardField(props: any) {
    const { id } = props;
    return (
        <Draggable id={id}>
            <div className={classes.cardField}>
                <div className={classes.cardBody}>
                    <strong>DRAG</strong>
                </div>
                <div className={classes.cardFooter}>
                    <span></span>
                </div>
            </div>
        </Draggable>
    );
}