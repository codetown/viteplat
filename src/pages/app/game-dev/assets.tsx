import { Button, Card } from "antd"
import { Link } from "react-router-dom"
import '@/pages/app/pages-config/tailwind.min.css'
import { libres } from "@/mock/data"
export default function Assets() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link to="#" className="flex items-center gap-2 font-bold text-xl">
                    <GamepadIcon className="h-6 w-6" />
                    GameAssets
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="#" className="hover:underline">
                        Browse
                    </Link>
                    <Link to="#" className="hover:underline">
                        Upload
                    </Link>
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="rounded-full">
                                <img
                                    src="/placeholder.svg"
                                    width={32}
                                    height={32}
                                    alt="User Avatar"
                                    className="rounded-full"
                                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <UserIcon className="w-4 h-4 mr-2" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SettingsIcon className="w-4 h-4 mr-2" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOutIcon className="w-4 h-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </header>
            <main className="flex-1 py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Discover Game Assets</h1>
                        <p className="text-muted-foreground">
                            Browse and download high-quality game assets for your indie projects.
                        </p>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">Featured Assets</h2>
                            <Link to="#" className="text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {libres.map((libre, index) => (
                                <Card key={`assets-${index + 1}`}>
                                    <div>
                                        <img
                                            src="/placeholder.svg"
                                            width={400}
                                            height={300}
                                            alt="Asset Thumbnail"
                                            className="rounded-t-lg object-cover w-full h-40"
                                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="font-bold text-lg mb-2">{libre.appName}</div>
                                        <div className="text-muted-foreground text-sm">by John Doe</div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-primary font-bold">$5</div>
                                            <Button size="small">Download</Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                            }
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">Top Rated Assets</h2>
                            <Link to="#" className="text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {libres.map((libre, index) => (
                                <Card key={`assets-${index + 1}`}>
                                    <div>
                                        <img
                                            src="/placeholder.svg"
                                            width={400}
                                            height={300}
                                            alt="Asset Thumbnail"
                                            className="rounded-t-lg object-cover w-full h-40"
                                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="font-bold text-lg mb-2">{libre.appName}</div>
                                        <div className="text-muted-foreground text-sm">by John Doe</div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-primary font-bold">$5</div>
                                            <Button size="small">Download</Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                            }
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">Community Uploads</h2>
                            <Link to="#" className="text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {libres.map((libre, index) => (
                                <Card key={`assets-${index + 1}`}>
                                    <div>
                                        <img
                                            src="/placeholder.svg"
                                            width={400}
                                            height={300}
                                            alt="Asset Thumbnail"
                                            className="rounded-t-lg object-cover w-full h-40"
                                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="font-bold text-lg mb-2">{libre.appName}</div>
                                        <div className="text-muted-foreground text-sm">by John Doe</div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-primary font-bold">$5</div>
                                            <Button size="small">Download</Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 flex items-center justify-between">
                <div className="text-sm">&copy; 2024 GameAssets. All rights reserved.</div>
                <div className="flex items-center gap-4">
                    <Link to="#" className="hover:underline">
                        Terms of Service
                    </Link>
                    <Link to="#" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link to="#" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </footer>
        </div>
    )
}

function GamepadIcon(props: any) {
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
            <line x1="6" x2="10" y1="12" y2="12" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="15" x2="15.01" y1="13" y2="13" />
            <line x1="18" x2="18.01" y1="11" y2="11" />
            <rect width="20" height="12" x="2" y="6" rx="2" />
        </svg>
    )
}