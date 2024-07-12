import { Icons, SkillIcons } from "../components/icons";
export const DATA = {
  name: "Abhay Raj",
  initials: "",
  url: "https://github.com/abhay-raj19",
  location: "Kanpur",
  locationLink: "https://www.google.com/maps/place/kanpur",
  description:
    "Designing and developing cutting-edge web applications as a full-stack Developer",
  summary:
    "Hi there! As an engineer, I focus on building and designing scalable websites and applications with exceptional user experiences and aesthetic appeal. In my free time, I love hacking up backends servers and testing them heavily.",
  avatarUrl: "/gallery/me.jpeg",
  skills: [
    SkillIcons.typescript,
    SkillIcons.javascript,
    SkillIcons.react,
    SkillIcons.next,
    SkillIcons.html,
    SkillIcons.css,
    SkillIcons.tailwind,
    SkillIcons.git,
    SkillIcons.mongodb,
    SkillIcons.postgresql,
    SkillIcons.prisma,
    SkillIcons.nodejs,
    SkillIcons.docker,
    SkillIcons.prometheus,
    SkillIcons.grafana,
    SkillIcons.Azure,
    SkillIcons.jest,
    SkillIcons.linux,
    SkillIcons.kubernetes,
    SkillIcons.python,
    SkillIcons.postman,
    SkillIcons.fastapi,
    SkillIcons.aws,
  ],
  contact: {
    email: "rajpootabhay423@gmail.com",
    tel: "+917084851789",
    social: {
      GitHub: {
        url: "https://github.com/abhay-raj19",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/abhay-raj19/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/abhayraj423",
        icon: Icons.x,
      }
    },
  },
  work: [
    {
      company: "Cloud Native and Computing Foundation",
      href: "https://www.cncf.io/",
      badges: [],
      location: "Remote",
      title: "Maintainer",
      logoUrl: "/work/cncf.jpg",
      start: "Nov 2023",
      end: "Present",
      description:
        "Developed key features and improved user interfaces for a dynamic web application using React JS. Gained hands-on experience in state management using Redux Toolkit and successfully integrated third-party APIs.",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com/",
      degree: "Cohort 2.0",
      logoUrl: "/edu/100xDevs.jpg",
      start: "2023",
      end: "Present",
    },
    {
      school: "Pranveer Singh Institute of Technology, Kanpur",
      href: "https://www.psit.ac.in/",
      degree: "Computer Science Engineering",
      logoUrl: "/edu/psit.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  blogs: [
    {
      title: "All About Docker",
      href: "https://cream-basket-a50.notion.site/Docker-79175000c2b64d74b8f55257b68b3dfa?pvs=4",
      logoUrl: "/blogs/docker.png",
      desc: "From 0 to 100x",
      date: "2nd July 2024",
      badges: ["Docker", "Cloud"],
    },
    {
      title: "Complete Git Guide",
      href: "https://cream-basket-a50.notion.site/Git-afe06899773c4a8b9b51f554c8cab0b7?pvs=4",
      logoUrl: "/blogs/git.png",
      desc: "Master in Few Minutes",
      date: "28th June 2024",
      badges: ["Git", "GitHub"],
    },
  ],
  projects: [
    {
      title: "Multimart-Store",
      href: "https://multimart-furniture.vercel.app/",
      dates: "May 2023 - Aug 2023",
      active: true,
      description:
        "Engineered a full-stack, performance-optimized **E-commerce** platform with secure authentication, cart management, and responsive design using modern technologies.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Recoil",
      ],
      links: [
        {
          type: "Live Preview",
          href: "https://multimart-furniture.vercel.app/",
          icon: <Icons.globe className="size-1" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhay-raj19/Multimart-Store",
          icon: <Icons.source className="size-1" />,
        },
      ],
      image: "/projects/multimart.png",
    },
    {
      title: "Build And Deploy",
      href: "",
      dates: "Dec 2023 - Feb 2024",
      active: true,
      description:
        "Build up a NextJs authentication web-Application, and integrated Continuous-integration and deployment pipelines and finally deployed it on Microsoft Azure with the help of the Docker.",
      technologies: [
        "NextJs",
        "Auth",
        "Docker",
        "Continous-Integration",
        "Express",
        "Azure",
        "Continous-Deployment",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhay-raj19/CI-CD.git",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/buildanddeploy.png",
    },
    {
      title: "ChatwithPDF",
      href: "",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Built a PDF chatting application, where a user can upload PDF and chat with that specific PDF and Ask question on the basis of the content of the PDF.",
      technologies: [
        "Python",
        "FastAPI",
        "Azure",
        "OpenAI",
        "LLM Model",
        "React",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhay-raj19/Chat-with-PDFs.git",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/chatwithpdf.png",
    },
    {
      title: "FitBody",
      href: "",
      dates: "Jun 2023 - March 2024",
      active: true,
      description:
        "Developed an open-source project with over 100+ contributions and more than 50+ stars on GitHub. This SaaS application is designed with the goal of establishing and scaling an online business to its maximum potential.",
      technologies: ["React", "CSS", "MongoDB", "Node.js", "Express", "Vite"],
      links: [
        {
          type: "Live Preview",
          href: "https://fit-body-delta.vercel.app/",
          icon: <Icons.globe className="size-1" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhay-raj19/FitBody.git",
          icon: <Icons.source className="size-3" />,
        },
      ],
      image: "/projects/fitbody.png",
    },
  ],
} as const;
