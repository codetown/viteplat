import classes from "./index.module.scss";
import TopBar from "@/pages/app/annotation-3d/components/TopBar";
import ToolBar from "@/pages/app/annotation-3d/components/ToolBar";
import ImageList from "./components/ImageList";
export default function () {
    const topActions=[{
        label:'创建',
        disabledText:'当前状态无法创建',
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
    const imageData=[
        {
            name:'第一张图',
            url:'https://i2.hdslb.com/bfs/archive/c4d977812af68f47c36465c8ae0b1117177e67ff.jpg'
        },
        {
            name:'第二张图',
            url:'https://i0.hdslb.com/bfs/archive/ee9c444426b742c428bfa3a536f4933a46421aad.jpg'
        }
    ]
    return (
        <div className={classes.workbench}>
            <TopBar actions={topActions}/>
            <div className={classes.container}>
                <ToolBar actions={topActions}/>
                <ImageList dataSource={imageData}/>
                <div className={classes.canvasBox}>
                    <div className={classes.canvasBody}>
                    读取PCD
                    </div>
                </div>
            </div>
        </div>
    );
}