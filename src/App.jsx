import Article from "./sections/Article";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Article />
        <Footer />
      </main>

      <div className="text-[11px] text-center">
        <span>Challenge by </span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-[#3e52a3] underline"
        >
          Frontend Mentor
        </a>
        <span>. Coded by </span>
        <a
          href="https://github.com/rachmatilham"
          className="text-[#3e52a3] underline"
        >
          Rachmat Ilham Maulana
        </a>
        .
      </div>
    </>
  );
}
