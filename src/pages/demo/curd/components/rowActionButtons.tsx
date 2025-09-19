import { Button } from "antd"

export default function RowActionButtons(props:any){
    const {actions,record}=props
    return <>
    {actions.map((actionItem:any)=><Button type={actionItem.type} icon={actionItem.icon} onClick={()=>{
        actionItem.action(record)
    }}>{actionItem.title}</Button>)}
    </>
}