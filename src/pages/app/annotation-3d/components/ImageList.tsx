// import { useState } from "react";
import classes from "../index.module.scss";
export default function (props:any) {
    const {dataSource}=props;
    return (
        <div className={classes.imageList}>
            {dataSource.map((item:any,index:number)=>(<a key={`img-box-${index+1}`}>
            <img src={item.url} alt={item.name} />
            </a>))}
        </div>
    );
}