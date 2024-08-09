import Image from "next/image";
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
        </header>

        
      );
}