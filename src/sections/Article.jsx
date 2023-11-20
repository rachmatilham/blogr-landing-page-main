export default function Article() {
  return (
    <article className="text-center md:text-left font-overpass pt-[100px] md:pt-[155px] md:pb-72 overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-textHeadings md:text-center">
        Designed for the future
      </h2>

      <section className="mt-11 md:mt-[77px] md:flex md:relative">
        <img
          src={
            window.innerWidth > 768
              ? "/images/illustration-editor-desktop.svg"
              : "/images/illustration-editor-mobile.svg"
          }
          alt="Editor Illustration"
          className="mx-auto md:min-w-[925px] md:min-h-[882px] md:absolute md:-top-[197px] md:left-[59.7%]"
        />
        <div className="ml-8 mr-7 mt-2 md:m-0 md:ml-[16.3%] md:w-[36.5%]">
          <h3 className="article-h3 mt-10">Introducing an extensible editor</h3>
          <p className="article-p">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>

          <h3 className="article-h3 mt-10 md:mt-[77px]">
            Robust content management
          </h3>
          <p className="article-p md:text-[1.01rem]">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </section>

      <div className="w-full h-[625px] md:h-[400px] bg-body-pattern md:bg-body-pattern-md bg-[bottom_-40%_center] md:bg-[bottom_20%_left_-50%] bg-no-repeat rounded-tr-[100px] rounded-bl-[100px] text-textWhite md:flex md:flex-row-reverse relative mt-[280px] md:mt-[253px] pt-56 md:pt-[7.8%]">
        <img
          src="/images/illustration-phones.svg"
          alt="Phone Illustration"
          className="max-h-[432px] md:max-h-max md:max-w-[50%] absolute -top-[180px] left-1/2 -translate-x-1/2 mx-auto md:-top-[66px] md:left-[8.75%] md:-translate-x-[8.75%]"
        />
        <div className="mx-8 md:mx-0 md:w-[36%] md:relative md:right-[12%]">
          <h2 className="text-4xl leading-[3.2rem] font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="text-base leading-7 font-semibold mt-4">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>

      <section className="mt-16 md:flex md:flex-row-reverse md:ml-[165px] md:mr-[160px] md:relative">
        <img
          src={
            window.innerWidth > 768
              ? "/images/illustration-laptop-desktop.svg"
              : "/images/illustration-laptop-mobile.svg"
          }
          alt="Laptop Illustration"
          className="mx-auto md:min-w-[974px] md:min-h-[786px] md:absolute md:top-14 md:right-[46.3%]"
        />

        <div className="ml-8 mr-7 mt-2 md:mx-0 md:mt-[17.5%] md:w-[47%] md:relative md:left-[4%]">
          <h3 className="article-h3 mt-12">Free, open, simple</h3>
          <p className="article-p text-[1.01rem]">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h3 className="article-h3 mt-12 md:mt-[77px]">Powerful tooling</h3>
          <p className="article-p">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>
    </article>
  );
}
