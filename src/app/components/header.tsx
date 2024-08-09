"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/posts",
        label: "Posts",
    }
];

export default function Header() {
    const pathname = usePathname();
    
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image 
                    src="https://avatars.githubusercontent.com/u/55962427?v=4&size=35"
                    alt="Blog logo"
                    className="rounded-full w-[35px] h-[35px]"
                    width="35"
                    height="35"
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link className={` ${pathname == link.href ? "text-green-600 font-semibold" : "text-green-400"}`} href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
      );
}