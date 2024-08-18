import { Button, Card, Input, Select } from "antd"
import { Link } from "react-router-dom"
import "../app-pages-config/tailwind.min.css"
import { libres } from "@/mock/data"
import classes from './index.module.scss'
export default function GameDev() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="bg-background border-b px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                    <PaletteIcon className="w-6 h-6" />
                    <span>GameAssets</span>
                </Link>
                <div className="flex items-center gap-2 md:gap-4">
                    <form className="flex-1 max-w-md">
                        <Input placeholder="Search assets..." className="bg-muted rounded-full pr-10" />
                        <Button type="primary" className="absolute right-2 top-1/2 -translate-y-1/2">
                            <SearchIcon className="w-5 h-5" />
                        </Button>
                    </form>
                    <Link
                        to="/"
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium"

                    >
                        <PlusIcon className="w-5 h-5" />
                        <span>Upload</span>
                    </Link>
                    <Button className="md:hidden">
                        <MenuIcon className="w-6 h-6" />
                    </Button>
                </div>
            </header>
            <main className={classes.main}>
                <div className={classes.sidebar}>
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <div className="grid gap-2">
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
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <span>Price</span>
                            <Select options={[{ value: 'all', label: 'All' }, { value: 'free', label: 'Free' }, { value: 'paid', label: 'Paid' }]} value={'all'}>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>License</span>
                            <Select options={[{ value: 'all', label: 'All' }, { value: 'commercial', label: 'Commercial' }, { value: 'personal', label: 'Personal' }]} value={'all'}>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.module}>
                        <h2>Featured Assets</h2>
                        <p>Handpicked assets to kickstart your game development.</p>
                        <div className={classes.cardList}>
                            {libres.map((libre, index) => (<Card key={`game-asset-${index}`}>
                                <img
                                    src={libre.iconUrl}
                                    alt="Asset Thumbnail"
                                    width={450}
                                    height={300}
                                />
                                <div className="flex items-center justify-between">
                                    <div className="grid gap-1">
                                        <h3 className="font-semibold line-clamp-1">{libre.appName}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <DollarSignIcon className="w-4 h-4" />
                                            <span>$9.99</span>
                                        </div>
                                    </div>
                                    <Button>
                                        <PlusIcon className="w-5 h-5" />
                                    </Button>
                                </div>
                            </Card>))
                            }
                        </div>
                    </div>
                    <div className={classes.module}>
                        <h2>Community Creations</h2>
                        <p>Check out what other developers have shared.</p>
                        <div className={classes.cardList}>
                            {libres.map((libre, index) => (
                                <Card key={`game-asset-${index+1}`}>
                                    <img
                                        src={libre.iconUrl}
                                        alt="Asset Thumbnail"
                                        width={450}
                                        height={300}
                                    />
                                    <div className="p-4 bg-background">
                                        <div className="flex items-center justify-between">
                                            <div className="grid gap-1">
                                                <h3 className="font-semibold line-clamp-1">{libre.appName}</h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <UserIcon className="w-4 h-4" />
                                                    <span>@gamedev_artist</span>
                                                </div>
                                            </div>
                                            <Button className="hover:bg-muted/50">
                                                <PlusIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function DollarSignIcon(props: any) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function FileAudioIcon(props: any) {
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
            <path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" />
        </svg>
    )
}


function ImageIcon(props: any) {
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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}


function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function PaletteIcon(props: any) {
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
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    )
}


function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function Scale3dIcon(props: any) {
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
            <circle cx="19" cy="19" r="2" />
            <circle cx="5" cy="5" r="2" />
            <path d="M5 7v12h12" />
            <path d="m5 19 6-6" />
        </svg>
    )
}


function SearchIcon(props: any) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function TypeIcon(props: any) {
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
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" x2="15" y1="20" y2="20" />
            <line x1="12" x2="12" y1="4" y2="20" />
        </svg>
    )
}


function UserIcon(props: any) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}