import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Services",
    href: "/",
  },
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Testimonials",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/",
  },
];

export default function AboutMe() {
  return (
    <>
      <header className="w-full mx-auto">
        <nav className="max-w-[1450px] w-full flex items-end justify-between mx-auto">
          <Link href="/" className="">
            <Image src="/coder.svg" alt="coder" className="" width={191} height={80} priority/>
          </Link>

          <div className="flex items-end justify-center gap-1">
            {
              navLinks.map((navlink, key) => {
                return (
                  <Link key={key} href={navlink.href} className="flex items-end justify-center hover:bg-[var(--colour-orange)] w-[120px] h-[120px] lg:h-[100px] pb-2">
                    <p className="text-[1.15rem]">{navlink.title}</p>
                  </Link>
                )
              })
            }
            <button type="button" className="bg-[var(--colour-orange)] px-6 py-4 rounded-md text-[1.15rem] ml-2 hover:bg-[var(--colour-orange-hover)]">Hire Me!</button>
          </div>
        </nav>

        <div>
          <div className=""></div>
          <Image src="" alt="coder" className="absolute right-0 top-0" width={191} height={80} priority/>
        </div>
      </header>
    </>
  )
}