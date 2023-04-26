import { useEffect } from "react";
import { FacebookIcon, InstagramIcon } from "../Graphics";

export function SecondaryNav({ links }: { links: any }) {
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/spillaneproperty",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/spillaneproperty",
    },
  ];

  return (
    <div className="self-center justify-self-end hidden lg:inline-block">
      {links.map((navItem: any) => (
        <a
          href={navItem.data.link}
          key={navItem.data.link}
          className="text-sp-blue pr-6 after:content-[''] after:pr-6 after:border-r after:border-sp-blue"
          target={navItem.data.external ? "_blank" : ""}
        >
          {navItem.data.label}
        </a>
      ))}

      {socialLinks.map((social) => (
        <a
          href={social.link}
          key={social.link}
          target="_blank"
          className="mr-5 last:mr-0 w-4 h-4 text-sp-blue object-contain"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
