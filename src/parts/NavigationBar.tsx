import { useEffect } from "react";

const NavLinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Vision", link: "vision" },
  { name: "Contact", link: "contact" },
];

export const NavigationBar = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <nav className="bg-[#1c1241] w-full grid grid-cols-3 sticky top-0 ">
        <img
          src="/Logo.png"
          alt=""
          className="h-24 px-10 py-3 hover:scale-110 transition duration-500"
        />
        <h1 className="text-yellow-400 text-4xl max-xl:hidden italic content-center text-center hover:scale-125 transition duration-1000">
          <span className="text-[#66abff]">Murooj</span>Lubricants
        </h1>
        <ul className="inline-flex px-2 py-7">
          {NavLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                let hero = document.getElementById(item.link);
                e.preventDefault();
                hero &&
                  hero.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(item.link, item.link, item.link);
              }}
              className="px-3 py-2 max-md:hidden max-xl:text-lg text-[1vw] text-white font-semibold border-2 rounded-xl mx-2 hover:scale-110 hover:bg-[#ffffffd6] hover:text-black transition duration-500"
            >
              <li>{item.name}</li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};
