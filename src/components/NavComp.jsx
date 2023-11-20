/* eslint-disable react/prop-types */
export default function NavComp({ id, title, lists, toggle, open }) {
  return (
    <div className="text-center md:text-left md:relative">
      <div
        className={
          "my-6 md:my-0 md:ml-[30px] hover:cursor-pointer flex flex-wrap justify-center items-center gap-2 hover:underline font-ubuntu " +
          (open
            ? "text-textBody md:text-textWhite"
            : "text-textHeadings md:text-textWhite")
        }
        onClick={() => toggle(title)}
      >
        {title}
        <img
          src={
            window.innerWidth > 768
              ? "./images/icon-arrow-light.svg"
              : "./images/icon-arrow-dark.svg"
          }
          alt="Nav Arrow"
          className={"w-3 h-2 " + (open ? "rotate-180" : "")}
        />
      </div>
      <ul
        className={
          "bg-textFooter/40 py-3 rounded-md md:absolute md:top-12 md:bg-textWhite md:pt-7 md:pb-6 md:pl-6 md:pr-[62px] md:shadow-[0_0_200px_rgba(0,0,0,0.7)] " +
          (open ? "block" : "hidden") +
          (id == 2 ? " mb-6" : "")
        }
      >
        {lists.map((list) => (
          <li key={lists.indexOf(list)} className="py-2 md:py-1">
            <a
              href="#"
              className="font-ubuntu font-medium text-textBody md:text-bgBody2/70 hover:text-bgBody2"
            >
              {list}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
