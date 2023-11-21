import { linkList } from "../Links";
import FooterComp from "../components/FooterComp";

export default function Footer() {
  return (
    <footer className="bg-bgFooter text-white rounded-tr-[100px] mt-24 md:mt-0 pt-[74px] pb-[72px] md:pb-10">
      <div className="md:flex md:w-[77.1%] md:mx-auto">
        <img
          src="./images/logo.svg"
          alt="Blogr Logo Images"
          className="mx-auto pb-[30px] md:pb-0 md:mx-0 md:w-[105px] md:h-10 md:mr-[16.2%]"
        />
        {linkList.map(({ title, lists }) => (
          <FooterComp key={title} title={title} lists={lists} />
        ))}
      </div>
    </footer>
  );
}
