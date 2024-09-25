import { CalendarIcon, LockIcon, MailsIcon, SearchIcon, SettingsIcon, StarIcon } from "@/components/Icons"
import { Input, Avatar } from "antd"
import { Link } from "react-router-dom"
import "../app/pages-config/tailwind.min.css"
// import styles from './index.module.scss'
// import { libres } from "@/mock/data"

export default function Imooc() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link to="#" className="text-2xl font-bold">
                    慕课网
                </Link>
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="搜索IT技能课程..."
                            className="bg-primary-foreground/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
                        />
                    </div>
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="flex items-center gap-2">
                                <Avatar className="w-8 h-8 border">JD</Avatar>
                                <span>John Doe</span>
                                <ChevronDownIcon className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>
                                <Link to="#">
                                    个人资料
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="#">
                                    我的课程
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="#">
                                    设置
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link to="#">
                                    退出登录
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </header>
            <main className="flex-1 py-8 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Link
                        to="#"
                        className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"

                    >
                        <img
                            src="/placeholder.svg"
                            alt="课程缩略图"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2">Web 开发入门</h3>
                            <p className="text-muted-foreground line-clamp-2">
                                学习 HTML、CSS 和 JavaScript 的基础知识，构建现代化网站。
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center gap-1 text-primary">
                                    <StarIcon className="w-4 h-4" />
                                    <span>4.8</span>
                                </div>
                                <div className="text-muted-foreground text-sm">(1,234 条评价)</div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="#"
                        className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"

                    >
                        <img
                            src="/placeholder.svg"
                            alt="课程缩略图"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2">React.js 基础</h3>
                            <p className="text-muted-foreground line-clamp-2">掌握 React.js 的基础知识，构建交互式用户界面。</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center gap-1 text-primary">
                                    <StarIcon className="w-4 h-4" />
                                    <span>4.7</span>
                                </div>
                                <div className="text-muted-foreground text-sm">(987 条评价)</div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="#"
                        className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"

                    >
                        <img
                            src="/placeholder.svg"
                            alt="课程缩略图"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2">Python 数据科学</h3>
                            <p className="text-muted-foreground line-clamp-2">探索 Python 在数据分析和机器学习领域的应用。</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center gap-1 text-primary">
                                    <StarIcon className="w-4 h-4" />
                                    <span>4.9</span>
                                </div>
                                <div className="text-muted-foreground text-sm">(2,345 条评价)</div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="#"
                        className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"

                    >
                        <img
                            src="/placeholder.svg"
                            alt="课程缩略图"
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2">Git 和 GitHub 实战</h3>
                            <p className="text-muted-foreground line-clamp-2">学习如何使用 Git 和 GitHub 进行版本控制和协作。</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center gap-1 text-primary">
                                    <StarIcon className="w-4 h-4" />
                                    <span>4.6</span>
                                </div>
                                <div className="text-muted-foreground text-sm">(654 条评价)</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
            <div className="bg-background">
                <div className="max-w-5xl mx-auto py-8 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <video
                                className="w-full aspect-video rounded-lg"
                                src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                controls
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Web 开发入门</h1>
                            <p className="text-muted-foreground mt-2">学习 HTML、CSS 和 JavaScript 的基础知识，构建现代化网站。</p>
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex items-center gap-1 text-primary">
                                    <StarIcon className="w-4 h-4" />
                                    <span>4.8</span>
                                </div>
                                <div className="text-muted-foreground text-sm">(1,234 条评价)</div>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold">课程大纲</h2>
                                <ul className="list-disc pl-6 text-muted-foreground mt-2">
                                    <li>HTML 基础</li>
                                    <li>CSS 基础</li>
                                    <li>JavaScript 基础</li>
                                    <li>构建简单网站</li>
                                    <li>响应式设计</li>
                                    <li>网站部署</li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold">讨论区</h2>
                                <div className="bg-muted rounded-lg p-4 mt-2">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="w-10 h-10 border">
                                            {/* <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                            <AvatarFallback>JD</AvatarFallback> */}JD
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <div className="font-semibold">John Doe</div>
                                                <div className="text-muted-foreground text-sm">2 天前</div>
                                            </div>
                                            <p className="mt-2">这个课程对初学者很有帮助。讲师讲解得很清楚,提供了大量实例。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-muted rounded-lg p-4 mt-4">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="w-10 h-10 border">
                                            {/* <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                            <AvatarFallback>JA</AvatarFallback> */}
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <div className="font-semibold">Jane Ahn</div>
                                                <div className="text-muted-foreground text-sm">1 周前</div>
                                            </div>
                                            <p className="mt-2">我非常喜欢这个课程到目前为止的内容。进度刚刚好,项目也很有趣。强烈推荐!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-muted py-8 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-background rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold">我的课程</h2>
                        <div className="mt-4 space-y-2">
                            <Link to="#" className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="课程缩略图"
                                    width={80}
                                    height={60}
                                    className="rounded-md"
                                    style={{ aspectRatio: "80/60", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-base font-semibold line-clamp-1">Web 开发入门</h3>
                                    <div className="text-muted-foreground text-sm line-clamp-1">已完成 75%</div>
                                </div>
                            </Link>
                            <Link to="#" className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="课程缩略图"
                                    width={80}
                                    height={60}
                                    className="rounded-md"
                                    style={{ aspectRatio: "80/60", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-base font-semibold line-clamp-1">React.js 基础</h3>
                                    <div className="text-muted-foreground text-sm line-clamp-1">已完成 50%</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold">个人资料</h2>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-4">
                                <Avatar className="w-16 h-16 border">
                                    {/* <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                    <AvatarFallback>JD</AvatarFallback> */}
                                    JD
                                </Avatar>
                                <div>
                                    <div className="text-base font-semibold">John Doe</div>
                                    <div className="text-muted-foreground text-sm">johndoe@example.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                                <div className="text-muted-foreground text-sm">注册于 2023 年 1 月 1 日</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold">设置</h2>
                        <div className="mt-4 space-y-2">
                            <Link
                                to="#"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"

                            >
                                <SettingsIcon className="w-4 h-4" />
                                <span>账户设置</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"

                            >
                                <LockIcon className="w-4 h-4" />
                                <span>安全设置</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"

                            >
                                <MailsIcon className="w-4 h-4" />
                                <span>通知设置</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}