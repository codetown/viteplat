import { Tag, Button, Card } from "antd"
import { Link } from "react-router-dom"
import "../app/pages-config/tailwind.min.css"
import styles from './index.module.scss'
import { libres } from "@/mock/data"
export default function AssetList() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
                <Link to="#" className="flex items-center gap-2 font-medium">
                    <PackageIcon className="h-6 w-6" />
                    <span>Game Assets</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Characters
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Backgrounds
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Audio
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Submit Asset
                    </Link>
                </nav>
            </header>
            <main className={styles.container}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ padding: 24 }}>
                    {libres.map((libre, index) => (
                        <Card key={`${index + 1}`} className={styles.assetCard}>
                            <img
                                src="/placeholder.svg"
                                alt="Character"
                                className="rounded-t-lg object-cover aspect-video"
                            />
                            <h3 className="text-lg font-medium">{libre.appName}</h3>
                            <p className="text-sm text-muted-foreground">{libre.appDescription}</p>
                            <p>
                                <Tag >PNG</Tag>
                                <Tag >FBX</Tag>
                                <Tag >Animations</Tag>
                            </p>
                            <div>
                                <Button className="w-full" type="primary">
                                    Download
                                </Button>
                            </div>
                        </Card>
                    ))
                    }
                </div>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Share Your Game Assets</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Contribute your own game assets to the community and help other developers bring their projects to
                                    life.
                                </p>
                            </div>
                            <Link
                                to="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                            >
                                Submit Asset
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 Game Assets. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link to="#" className="text-xs hover:underline underline-offset-4">
                        Terms of Service
                    </Link>
                    <Link to="#" className="text-xs hover:underline underline-offset-4">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function PackageIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}