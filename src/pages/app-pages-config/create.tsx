import { Button } from "antd"
import { Link } from "react-router-dom"
import './tailwind.min.css'
function Trash2Icon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}

function BoxIcon(props: any) {
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function FootprintsIcon(props: any) {
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
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function HeadingIcon(props: any) {
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
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  )
}


function NavigationIcon(props: any) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}


function ShapesIcon(props: any) {
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
      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  )
}

export default function pageCreate() {
  return (
    <div className="flex h-screen w-full">
      <div className="bg-background border-r w-64 p-4 flex flex-col gap-4">
        <div className="text-lg font-medium">组件库</div>
        <div className="flex flex-col gap-2">
          <div className="bg-muted rounded-md p-2 cursor-grab hover:bg-muted/50 flex items-center gap-2">
            <NavigationIcon className="w-5 h-5" />
            <span>导航栏</span>
          </div>
          <div className="bg-muted rounded-md p-2 cursor-grab hover:bg-muted/50 flex items-center gap-2">
            <HeadingIcon className="w-5 h-5" />
            <span>页头</span>
          </div>
          <div className="bg-muted rounded-md p-2 cursor-grab hover:bg-muted/50 flex items-center gap-2">
            <FootprintsIcon className="w-5 h-5" />
            <span>页脚</span>
          </div>
          <div className="bg-muted rounded-md p-2 cursor-grab hover:bg-muted/50 flex items-center gap-2">
            <BoxIcon className="w-5 h-5" />
            <span>按钮</span>
          </div>
          <div className="bg-muted rounded-md p-2 cursor-grab hover:bg-muted/50 flex items-center gap-2">
            <ShapesIcon className="w-5 h-5" />
            <span>表单</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 relative">
        <div className="bg-background border rounded-lg h-full w-full overflow-auto">
          <div className="grid grid-cols-12 gap-4 p-6">
            <div className="col-span-4 bg-muted rounded-md p-4 cursor-move hover:bg-muted/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">导航栏</div>
                <Trash2Icon className="w-5 h-5 text-muted-foreground cursor-pointer" />
              </div>
              <div className="text-sm text-muted-foreground">这是一个导航栏组件,您可以拖拽到工作区域中。</div>
            </div>
            <div className="col-span-6 bg-muted rounded-md p-4 cursor-move hover:bg-muted/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">页头</div>
                <Trash2Icon className="w-5 h-5 text-muted-foreground cursor-pointer" />
              </div>
              <div className="text-sm text-muted-foreground">这是一个页头组件,您可以拖拽到工作区域中。</div>
            </div>
            <div className="col-span-2 bg-muted rounded-md p-4 cursor-move hover:bg-muted/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">按钮</div>
                <Trash2Icon className="w-5 h-5 text-muted-foreground cursor-pointer" />
              </div>
              <div className="text-sm text-muted-foreground">这是一个按钮组件,您可以拖拽到工作区域中。</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background border-l w-96 p-6 flex flex-col gap-4">
        <div className="text-lg font-medium">实时预览</div>
        <div className="bg-muted rounded-lg h-full overflow-auto">
          <div className="p-6 space-y-4">
            <div className="bg-card rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">导航栏</div>
                <div className="flex items-center gap-2">
                  <Link to="#" className="text-muted-foreground hover:underline">
                    Home
                  </Link>
                  <Link to="#" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                  <Link to="#" className="text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">页头</div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">My App</h1>
                  <p className="text-muted-foreground">Welcome to my app!</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-md p-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">按钮</div>
                <Button>Click me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}