import { useState } from "react";
import { linkList } from "../Links";
import NavComp from "../components/NavComp";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [navKey, setNavKey] = useState();

  function toggleNav(key) {
    setNavKey(navKey !== key ? key : null);
  }
  return (
    <nav className="flex justify-between items-center relative">
      <img
        src="./images/logo.svg"
        alt="Blogr Logo Images"
        className="w-[84px] h-8 md:w-[101px] md:h-[42px]"
      />
      <div
        className={
          "nav-icon " + (nav ? "bg-[url(../images/icon-close.svg)]" : "")
        }
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
      <div
        className={
          "pb-8 md:pb-0 absolute md:relative bg-textWhite md:bg-transparent top-[124px] md:top-0 w-full rounded-md md:rounded-none font-semibold md:flex md:justify-between shadow-[0_0_500px_rgba(0,0,0,0.4)] md:shadow-none " +
          (nav ? "" : "hidden")
        }
      >
        <div className="mx-[22px] md:ml-8 md:mr-0 border-b border-textFooter md:border-none md:flex md:items-center">
          {linkList.map(({ id, title, lists }) => (
            <NavComp
              key={title}
              id={id}
              title={title}
              lists={lists}
              toggle={toggleNav}
              open={navKey === title}
            />
          ))}
        </div>
        <div className="md:flex md:items-center">
          <button className="nav-btn mt-6 md:mt-0 md:mr-8 text-textHeadings md:text-textWhite">
            Login
          </button>
          <button
            className={
              "nav-btn mt-[18px] md:mt-0 rounded-full w-36 h-12 " +
              (window.innerWidth > 768
                ? "bg-textWhite text-bgCtaHover hover:bg-bgCtaHover hover:text-textWhite"
                : "text-textWhite bg-gradient-to-r from-bgIntro1 to-bgIntro2")
            }
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
