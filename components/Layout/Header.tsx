import { Logo, Nav, SecondaryNav } from "@/components";
import Image from "next/image";
export function Header({ secondaryLinks }: { secondaryLinks: any[] }) {
  return (
    <header className="bg-sp-pink pt-20 pb-5 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3">
          <a href="/" className="hidden lg:inline-block">
            <Logo width={"243.04"} height={"78.66"} />
          </a>
          <a href="/" className="lg:hidden">
            <div className=" relative w-[163.34px] h-[52.87px] mx-auto">
            <Image alt="logo" src={"/image/FullLogo-light.png"} className="object-contain" fill  />
            </div>
          </a>
          <Nav />
          <SecondaryNav links={secondaryLinks} />
        </div>
      </div>
    </header>
  );
}
