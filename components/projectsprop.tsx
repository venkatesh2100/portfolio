import Image from "next/image";

// Project Data Component
const Project = () => {
  const data = [
    {
      name: "Paytm",
      link: "",
      description:
        "A simple web application for money transfers that includes user signup, authentication, secure data storage, and robust transaction functionality.",
      stack: ["Typescript", "Express","Nextjs"],
      image: "/luffy.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/wallet.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
      w:400,
      h:100
    },
    {
      name: "Blog-site",
      link: "",
      description:
        "A clean  web application using TypeScript for creating and managing a blog. Implement user authentication, and a robust database system to store blog posts, and user data.",
      stack: ["React", "Prisma","Postgress"],
      image: "/luffy.jpeg", // Path shgould be relative to 'public' for Next.js
      icon: "/blog.svg",
      source: "https://github.com/venkatesh2100/Blog-site",
      w:400,
      h:100
    },
    {
      name: "Dukaan",
      link: "https://dukkan-codewithvenky.vercel.app/",
      description:"A Tailwind-oriented project utilizing React and Next.js to develop a simple online money wallet transaction web interface.",
      stack: ["Nextjs", "Tailwind CSS"],
      image: "/luffy.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/dukkan.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
      w:400,
      h:100
    },
    {
      name: "Tic-Tac-Toe",
      link: "",
      description:
        "It is a full-stack application that allows users to play the classic Tic Tac Toe game in both single-player and multiplayer modes..",
      stack: ["React", "Python","flask"],
      image: "/AI.png", // Path should be relative to 'public' for Next.js
      icon: "/tic.svg",
      source: "https://github.com/venkatesh2100/TIC_TAC",
      w:400,
      h:410
    },
    {
      name: "Dukaan",
      link: "https://mydukaan.io/",
      description:
        "Dukaan is an easy-to-use platform that lets you create your free online store, and start selling online.",
      stack: ["React", "JavaScript"],
      image: "/luffy.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/dukkan.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
      w:200,
      h:200
    },

    {
      name: "Dukaan",
      link: "https://mydukaan.io/",
      description:
        "Dukaan is an easy-to-use platform that lets you create your free online store, and start selling online.",
      stack: ["React", "JavaScript"],
      image: "/luffy.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/dukkan.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
      w:200,
      h:200
    },



  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );

};

// Project Card Component
interface ProjectProps {
  name: string;
  icon: string;
  link: string;
  image: string;
  description: string;
  stack: string[];
  source: string;
  w:number;
  h:number;
}
const ProjectCard: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  link,
  stack,
  source,
  w,
  h,
  icon,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg w-full hover:shadow-2xl transition-shadow duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={name} width={w} height={h} className="rounded-md" />
      </a>
      <div className="flex items-center mt-3 text-xl font-medium">
        <Image src={icon} alt={`${name} icon`} width={24} height={24} className="mr-2" />
        <div>{name}</div>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 block"
      >
        Source Code
      </a>
      <div className="mt-4 flex gap-2">
        {stack.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-sm px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};


export default Project;
