/* eslint-disable react/prop-types */

export default function FooterComp({ title, lists }) {
  return (
    <div className="text-center md:text-left mt-[46px] md:mt-0 md:mr-[16.2%]">
      <div className="text-textWhite mb-[30px] font-ubuntu font-bold">
        {title}
      </div>
      <ul>
        {lists.map((list) => (
          <li key={lists.indexOf(list)}>
            <a
              href="#"
              className="text-textFooter/80 font-ubuntu text-[1.17rem] md:text-base leading-8 md:leading-9 hover:cursor-pointer hover:underline"
            >
              {list}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
