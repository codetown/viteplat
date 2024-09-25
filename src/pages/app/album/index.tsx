import { Link } from "react-router-dom"
import "../app/pages-config/tailwind.min.css"
import { libres } from "@/mock/data"
export default function Album() {
  return (
    <div className="bg-background text-foreground">
      <header className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Elegant Photo Gallery</h1>
        <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
          Discover our curated collection of stunning photographs, each capturing a moment of beauty and wonder.
        </p>
      </header>
      <nav className="bg-muted/40 border-b">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="flex items-center h-14 md:h-16">
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex items-center h-full px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Nature
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex items-center h-full px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Portraits
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex items-center h-full px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Architecture
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="inline-flex items-center h-full px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Travel
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
          </div>
        </div>
      </nav>
      <main className="container max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-20" style={{ margin: '0 auto', maxWidth: 1600 }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {libres.map((libre: any, index: number) => (<Link key={`libre-${index + 1}`}
            to={libre.iconUrl}
            className="relative overflow-hidden rounded-lg group transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={libre.iconUrl}
              width={600}
              height={600}
              alt={libre.name}
              className="aspect-square object-cover w-full"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomInIcon className="w-8 h-8 text-white" />
            </div>
          </Link>))}
        </div>
      </main>
    </div>
  )
}

function ZoomInIcon(props: any) {
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
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}