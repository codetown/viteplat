import classes from '../index.module.scss'
export default function AssetCard(props: any) {
    return (
        <div className={classes.assetCard}>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}