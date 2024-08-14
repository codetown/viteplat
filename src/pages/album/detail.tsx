import { Link } from "react-router-dom";
import "../app-pages-config/tailwind.min.css"
import { libres } from "@/mock/data";
export default function AlbumDetail() {
    return (
        <div className="w-full">
            <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Elegant Photo Gallery</h1>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 lg:p-8">
                {libres.map((libre: any, index: number) => (
                    <div key={`lib-${index + 1}`} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                        <Link to="" className="absolute inset-0 z-10" >
                            <span className="sr-only">View</span>
                        </Link>
                        <img
                            src={libre.iconUrl}
                            alt="Photo 2"
                            width="600"
                            height="400"
                            className="object-cover w-full h-64"
                            style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        />
                        <div className="p-4 bg-background">
                            <h3 className="text-xl font-bold">{libre.appName}</h3>
                            <p className="text-sm text-muted-foreground">{libre.appDescription}</p>
                        </div>
                    </div>
                ))}
            </main>
            {/* <aside className="hidden lg:block fixed top-0 right-0 h-full w-64 bg-muted p-4">
                <h2 className="text-2xl font-bold mb-4">Albums</h2>
                <nav className="space-y-2">
                    <Link to="" className="block text-muted-foreground hover:text-foreground" >
                        Landscapes
                    </Link>
                    <Link to="" className="block text-muted-foreground hover:text-foreground" >
                        Cityscapes
                    </Link>
                    <Link to="" className="block text-muted-foreground hover:text-foreground" >
                        Portraits
                    </Link>
                    <Link to="" className="block text-muted-foreground hover:text-foreground" >
                        Nature
                    </Link>
                    <Link to="" className="block text-muted-foreground hover:text-foreground" >
                        Architecture
                    </Link>
                </nav>
            </aside> */}
        </div>
    )
}