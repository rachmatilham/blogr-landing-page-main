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

      <footer className="attribution">
        <span>Challenge by </span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="attribution-link"
        >
          Frontend Mentor
        </a>
        <span>. Coded by </span>
        <a href="https://github.com/rachmatilham" className="attribution-link">
          Rachmat Ilham Maulana
        </a>
        .
      </footer>
    </>
  );
}
