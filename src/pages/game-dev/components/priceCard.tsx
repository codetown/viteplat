import { Link } from 'react-router-dom'
import classes from '../index.module.scss'
import { DollarSignIcon, PlusIcon, UserIcon } from './icons'
import { Button } from 'antd'
export default function PriceCard(props: any) {
    const { title, image } = props
    return (
        <div className={classes.priceCard}>
            <div className={classes.assetViewer}>
            <img
                src={image}
                alt="Asset Thumbnail"
            />
            <Link to="/game-dev/assets">
                预览
            </Link>
            </div>
            <h3>{title}</h3>
            <p>
                <UserIcon />
                <span>@gamedev_artist</span>
            </p>
            <p>
                <DollarSignIcon />
                <span className={classes.priceNumber}>9.99</span>
                <Button icon={<PlusIcon />} type='primary'>Add To Cart</Button>
            </p>
        </div>
    )
}