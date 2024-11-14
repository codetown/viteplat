import { useState } from "react";
import classes from "./index.module.scss";
import TopBar from "@/components/WorkBentch/TopBar";
import ToolBar from "@/components/WorkBentch/ToolBar";
export default function () {
    // const [isDropped, setIsDropped] = useState(false);

    // function handleDragEnd(event: any) {
    //     if (event.over && event.over.id === "droppable") {
    //         setIsDropped(true);
    //     }
    // }
    const topActions=[{
        label:'创建',
        disabledText:'',
        action:() => {
        }
    },{
        label:'修改',
        disabledText:'',
        action:() => {
        }
    },{
        label:'删除',
        disabledText:'',
        action:() => {
        }
    },{
        label:'提交',
        disabledText:'',
        action:() => {
        }
    }]
    return (
        <div className={classes.workbench}>
            <TopBar actions={topActions}/>
            <div className={classes.container}>
                <ToolBar actions={topActions}/>
            </div>
        </div>
    );
}