import Image from "next/image";
import Link from "next/link";

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
    return (
        <header>
            <Image 
                src="https://avatars.githubusercontent.com/u/55962427?v=4&size=35"
                alt="Blog logo"
                className="rounded-full w-[35px] h-[35px]"
                width="35"
                height="35"
            />
        
            <nav>
                <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
      );
}