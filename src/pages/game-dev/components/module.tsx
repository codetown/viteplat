import classes from '../index.module.scss'
import PriceCard from "./priceCard";
export default function Module(props: any) {
    const { dataSource, title, subtitle } = props
    return (
        <div className={classes.module}>
            <h2>{title || 'Featured Assets'}</h2>
            {subtitle && <p>{subtitle || 'Handpicked assets to kickstart your game development.'}</p>}
            <div className={classes.assetGrid}>
                {dataSource?.map((libre: any, index: number) => (<PriceCard title={libre.appName}
                    image={libre.iconUrl}
                    description={libre.appDescription}
                    key={index} />))
                }
            </div>
        </div>
    )
}