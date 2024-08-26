import { Link } from "react-router-dom";
import { FileAudioIcon, ImageIcon, Scale3dIcon, TypeIcon } from "./icons";
import { Select } from "antd";
import classes from "../index.module.scss"
export default function Aside() {
    return (
        <aside>
            <h2 className="text-lg font-semibold">Categories</h2>
            <div className={classes.cateMenu}>
                <Link
                    to="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/50"

                >
                    <Scale3dIcon className="w-5 h-5" />
                    <span>3D Models</span>
                </Link>
                <Link
                    to="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/50"

                >
                    <ImageIcon className="w-5 h-5" />
                    <span>Textures</span>
                </Link>
                <Link
                    to="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/50"

                >
                    <FileAudioIcon className="w-5 h-5" />
                    <span>Audio</span>
                </Link>
                <Link
                    to="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/50"

                >
                    <TypeIcon className="w-5 h-5" />
                    <span>Fonts</span>
                </Link>
            </div>
            <h2>Filters</h2>
            <div className={classes.filters}>
                <div>
                    <span>Price</span>
                    <Select className={classes.select} options={[{ value: 'all', label: 'All' }, { value: 'free', label: 'Free' }, { value: 'paid', label: 'Paid' }]} value={'all'}>
                    </Select>
                </div>
                <div>
                    <span>License</span>
                    <Select className={classes.select} options={[{ value: 'all', label: 'All' }, { value: 'commercial', label: 'Commercial' }, { value: 'personal', label: 'Personal' }]} value={'all'}>
                    </Select>
                </div>
            </div>
        </aside >
    )
}