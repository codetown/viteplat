import { Button } from "antd"
import { Link } from "react-router-dom"
import "../app-pages-config/tailwind.min.css"
export default function Photo() {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-background border-b px-4 py-2 flex items-center justify-between">
                <div className="text-2xl font-bold">Photo Gallery</div>
                <nav className="flex items-center gap-4">
                    <Link to="#" className="text-muted-foreground hover:text-foreground" >
                        Home
                    </Link>
                    <Link to="#" className="text-muted-foreground hover:text-foreground" >
                        About
                    </Link>
                    <Link to="#" className="text-muted-foreground hover:text-foreground" >
                        Contact
                    </Link>
                </nav>
            </header>
            <div className="flex-1 bg-muted relative">
                <img
                    src="https://picsum.photos/400/250?r=4"
                    width={1280}
                    height={720}
                    alt="Gallery Image"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "1280/720", objectFit: "cover" }}
                />
                <Button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                    <span className="sr-only">Previous</span>
                </Button>
                <Button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                    <span className="sr-only">Next</span>
                </Button>
            </div>
            <div className="bg-background border-t px-4 py-2 grid grid-cols-5 gap-2 overflow-x-auto">
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
                <Link to="/" className="group">
                    <img
                        src="https://picsum.photos/400/250?r=4"
                        width={128}
                        height={128}
                        alt="Thumbnail"
                        className="aspect-square object-cover rounded-md group-hover:opacity-50 transition-opacity"
                    />
                </Link>
            </div>
        </div>
    )
}

function ChevronLeftIcon(props: any) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: any) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}