import Project from "../projectsprop";

export const ProjectComponent = () => {
  return (
    <div className="border-black">
      <section className="md:flex md:items-center md:space-x-8 p-4 md:mx-5  border-black  h-32">
        <div className="text-2xl md:5xl font-bold flex-col items-center mx-auto">
          Here’s a taste of what I’ve built. The rest is waiting for you on
          <span> </span>
          <a
            href="https://github.com/venkatesh2100/"
            className="hover:text-blue-500 underline"
            target="_blank"
          >
            GitHub!
          </a>
        </div>
      </section>
      <Project/>
    </div>
  );
};
