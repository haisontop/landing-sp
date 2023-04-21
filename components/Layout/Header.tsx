import { Logo, Nav, SecondaryNav } from "@/components";
export function Header({ secondaryLinks }: { secondaryLinks: any[] }) {
  return (
    <header className="bg-sp-pink py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3">
          <a href="/">
            <Logo />
          </a>
          <Nav />
          <SecondaryNav links={secondaryLinks} />
        </div>
      </div>
    </header>
  );
}
