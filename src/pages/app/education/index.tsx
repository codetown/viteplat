import { Button, Card, Avatar } from "antd"
import { Link } from "react-router-dom"
import "@/pages/app/pages-config/tailwind.min.css"
// import styles from './index.module.scss'
// import { libres } from "@/mock/data"
export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link to="#" className="flex items-center gap-2">
                    <VideoIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Online Courses</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="#" className="hover:underline">
                        Courses
                    </Link>
                    <Link to="#" className="hover:underline">
                        Pricing
                    </Link>
                    <Link to="#" className="hover:underline">
                        Instructors
                    </Link>
                    <Link to="#" className="hover:underline">
                        About
                    </Link>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </nav>
                <Button className="md:hidden">
                    <MenuIcon className="h-6 w-6" />
                </Button>
            </header>
            <main className="flex-1">
                <section className="bg-primary py-20 px-6 text-center text-primary-foreground">
                    <h1 className="text-4xl font-bold mb-4">Learn Anytime, Anywhere</h1>
                    <p className="text-lg mb-8">Unlock your potential with our comprehensive online courses.</p>
                    <div className="flex justify-center gap-4">
                        <Button size="large">Browse Courses</Button>
                        <Button size="large">
                            Get Started
                        </Button>
                    </div>
                </section>
                <section className="py-12 px-6 md:py-20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
                            <p className="text-muted-foreground mb-8">Browse our selection of top-rated online courses.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <div>
                                        <h3>Web Development</h3>
                                        <p>Master the fundamentals of web development.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Avatar>
                                                {/* <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                                                <AvatarFallback>JD</AvatarFallback> */}
                                                JD
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">John Doe</div>
                                                <div className="text-muted-foreground text-sm">Instructor</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="small">Enroll Now</Button>
                                    </div>
                                </Card>
                                <Card>
                                    <div>
                                        <h3>Data Science</h3>
                                        <p>Dive into the world of data analysis and machine learning.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Avatar>
                                                {/* <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                                                <AvatarFallback>JA</AvatarFallback> */}
                                                JA
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">Jane Ahn</div>
                                                <div className="text-muted-foreground text-sm">Instructor</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="small">Enroll Now</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-muted py-12 px-6 md:py-20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                            <p className="text-muted-foreground mb-8">Discover the benefits of our online education platform.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Flexible Learning</h3>
                                        <p className="text-muted-foreground">Learn at your own pace, anytime, anywhere.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Expert Instructors</h3>
                                        <p className="text-muted-foreground">Learn from industry-leading experts in their fields.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Interactive Learning</h3>
                                        <p className="text-muted-foreground">Engage with interactive course materials and exercises.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="py-12 px-6 md:py-20">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-center">Our Instructors</h2>
                        <p className="text-muted-foreground mb-8 text-center">Meet the experts behind our online courses.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <Card>
                                <div>
                                    <Avatar>
                                        {/* <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                                        <AvatarFallback>JD</AvatarFallback> */}
                                        JA
                                    </Avatar>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <div className="font-medium">John Doe</div>
                                        <div className="text-muted-foreground text-sm">Web Development</div>
                                    </div>
                                </div>
                                <div>
                                    <Button size="small">View Profile</Button>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <Avatar>
                                        {/* <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                                        <AvatarFallback>JA</AvatarFallback> */}
                                        JA
                                    </Avatar>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <div className="font-medium">Jane Ahn</div>
                                        <div className="text-muted-foreground text-sm">Data Science</div>
                                    </div>
                                </div>
                                <div>
                                    <Button size="small">View Profile</Button>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <Avatar>
                                        {/* <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                                        <AvatarFallback>MS</AvatarFallback> */}MS
                                    </Avatar>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <div className="font-medium">Michael Smith</div>
                                        <div className="text-muted-foreground text-sm">Machine Learning</div>
                                    </div>
                                </div>
                                <div>
                                    <Button size="small">View Profile</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-12 px-6 md:py-20">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
                        <p className="text-muted-foreground mb-8 text-center">Get in touch with us for more information.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-medium mb-2">Address</h3>
                                <address className="text-muted-foreground not-italic">
                                    123 Main Street
                                    <br />
                                    Anytown, USA 12345
                                </address>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Contact Info</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                                        <a href="#" className="text-muted-foreground hover:underline">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MailIcon className="h-5 w-5 text-muted-foreground" />
                                        <a href="#" className="text-muted-foreground hover:underline">
                                            info@example.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-muted text-muted-foreground py-6 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <VideoIcon className="h-6 w-6" />
                        <span className="text-lg font-bold">Online Courses</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link to="#" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="hover:underline">
                            Terms of Service
                        </Link>
                        <Link to="#" className="hover:underline">
                            FAQ
                        </Link>
                    </nav>
                    <p className="text-sm">&copy; 2024 Online Courses. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export function CheckIcon(props: any) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


export function MailIcon(props: any) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


export function MenuIcon(props: any) {
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


export function PhoneIcon(props: any) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


export function VideoIcon(props: any) {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}