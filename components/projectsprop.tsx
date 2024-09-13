import Image from "next/image";

// Project Data Component
const Project = () => {
  const data = [
    {
      name: "Dukaan",
      link: "https://mydukaan.io/",
      description:
        "Dukaan is an easy-to-use platform that lets you create your free online store, and start selling online.",
      stack: ["React", "JavaScript"],
      image: "/luffy.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/dukkan.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
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
}
const ProjectCard: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  link,
  stack,
  source,
  icon,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg w-full hover:shadow-2xl transition-shadow duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={name} width={300} height={200} className="rounded-md" />
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
