import Image from "next/image";
import Link from "next/link";
import SkillLevel from "./components/SkillLevel";

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
      <header className="w-full mx-auto h-full">
        <nav className="max-w-[1450px] w-full flex items-end justify-between mx-auto">
          <Link href="/" className="">
            <Image src="/coder.svg" alt="coder" className="sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px]" width={191} height={80} priority/>
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

        <div className="relative max-w-[1450px] mx-auto w-full h-full flex items-center justify-between">
          <div className="relative flex flex-col h-full items-start justify-center gap-2 sm:mt-20 xl:mt-32">
            <div className="bg-[var(--colour-orange)] px-4 py-2">
              <p className="lg:text-[16px] xl:text-[20px] font-thin">Hello, I am</p>
            </div>
            <h2 className="lg:text-[50px] xl:text-[70px] font-bold">Mr. John Weary</h2>
            <p className="lg:text-[16px] xl:text-[20px] font-normal">A Professional Web Developer and UI/UX Designer.</p>
            <div className="flex items-center justify-start gap-2 mt-8">
              <button type="button" className="bg-[var(--colour-orange)] px-6 py-4 rounded-md text-[1.15rem] hover:bg-[var(--colour-orange-hover)]">Download CV</button>
              <button type="button" className="bg-transparent px-6 py-4 rounded-md text-[1.15rem] hover:bg-[#70707051] border">My Work</button>
            </div>
          </div>

          <Image src="/hero_photo.png" alt="coder photo" 
            className="absolute right-0 top-0 -z-10 max-w-[1450] w-auto h-auto" 
            width={1430} height={953} priority
          />
        </div>

        {/* <div className="absolute mx-auto bottom-0 border border-[var(--colour-orange)] w-[32px] h-[48px] rounded-lg px-2 py-4"></div> */}
      </header>

      <section className="w-full max-w-[1450px] mt-64 mb-64 flex flex-row items-center justify-between mx-auto gap-4 p-4">
        <div className="w-[709px] h-[832px] relative">
          <Image src="/image1.png" className="absolute top-0 right-0 rounded-md w-auto h-auto" width={700} height={760} alt="hero photo"/>
          <div className="absolute bottom-0 -left-16 w-[262px] h-[243px] bg-[#111111] rounded-md"></div>
        </div>
        
        <div className="flex flex-col item-center justify-between gap-8">
          <h3 className="text-[40px] max-w-[347px]">Read About My Life Struggle Story!</h3>
          <p className="text-[18px] max-w-[647px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>

          <div className="flex flex-col items-start justify-start gap-4">
            <SkillLevel skill={"PHP"} progress={80} colour={"orange"} />
            <SkillLevel skill={"Node"} progress={80} colour={"orange"} />
            <SkillLevel skill={"HTML, CSS, JS"} progress={80} colour={"orange"} />
            <SkillLevel skill={"NEXT.JS"} progress={80} colour={"orange"} />
          </div>

          <div className="flex item-center justify-start gap-2">
            <button type="button" className="bg-[var(--colour-orange)] px-6 py-4 rounded-md text-[1.15rem] hover:bg-[var(--colour-orange-hover)]">Hire Me!</button>
            <button type="button" className="bg-transparent px-6 py-4 rounded-md text-[1.15rem] hover:bg-[#70707051] border">About Me</button>
          </div>
        </div>
      </section>
    </>
  )
}