import { Link } from "react-router-dom";
import { PaletteIcon, PlusIcon } from "./icons";
import { Button, Form, Input } from "antd";
import classes from "../index.module.scss"
export default function Header() {
    return (
        <header>
            <Link to="/" className={classes.brand}>
                <PaletteIcon />
                <strong>GameAssets</strong>
            </Link>
            <Form>
                <Input.Search />
            </Form>
            <Button type="link" href="/" color="primary"
                icon={<PlusIcon />
                }>上传素材
            </Button>
        </header>
    )
}