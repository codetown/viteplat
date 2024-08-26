import classes from '../index.module.scss'
export default function AppCard(props: any) {
    const { title, description, image } = props
    return (
        <div className={classes.appCard}>
            <img src={image} alt="" />
            <strong>{title}</strong>
            <p>{description}</p>
            <span><a>Download</a></span>
        </div>
    )
}