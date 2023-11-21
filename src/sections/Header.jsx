import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="w-full md:w-[77.4%] md:pt-14 mx-auto h-full">
        <Nav />
        <h1 className="heading-main">A modern publishing platform</h1>
        <p className="mt-5 mx-2 text-lg md:mt-9 md:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <button className="header-cta-btn header-btn-1">
            Start for Free
          </button>
          <button className="header-cta-btn header-btn-2">Learn More</button>
        </div>
      </div>
    </header>
  );
}
