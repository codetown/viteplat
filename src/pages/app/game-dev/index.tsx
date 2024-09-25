import classes from "./index.module.scss"
import { libres } from "@/mock/data"

import Header from "./components/header"
import Aside from "./components/aside"
import Footer from "./components/footer"
import Module from "./components/module"
export default function GameDev() {
    return (
        <div className={classes.gameDevHome}>
            <Header />
            <main>
                <Aside />
                <div className={classes.content}>
                    <section className={classes.poster}>
                        <div className={classes.posterInner}>
                            <h1>Share Your Game Assets</h1>
                            <p>Contribute your own game assets to the community and help other developers bring their projects to life.</p>
                            <a href="/game-dev/asset-list">Submit Asset</a>
                        </div>
                    </section>
                    <Module dataSource={libres} subtitle="Contribute your own game assets to the community and help other developers bring their projects to life." />
                    <Module dataSource={libres} cardClassName={classes.appCard} />
                </div >
            </main >
            <Footer />
        </div >
    )
}