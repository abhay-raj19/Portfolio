import {
  CodeXml,
  Github,
  GlobeIcon,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import React from "react";
export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} className="h-3 w-3" />,
  source: (props: IconProps) => <CodeXml {...props} className="h-3 w-3" />,
  mail: (props: IconProps) => <Mail {...props} className="h-4 w-4" />,
  linkedin: (props: IconProps) => <Linkedin {...props} className="h-4 w-4" />,
  x: (props: IconProps) => <Twitter {...props} className="h-4 w-4" />,
  github: (props: IconProps) => <Github {...props} className="h-4 w-4" />
};

export const SkillIcons = {
  typescript: () => (
    <img src="https://skillicons.dev/icons?i=typescript&theme=dark" />
  ),
  javascript: () => (
    <img src="https://skillicons.dev/icons?i=javascript&theme=dark" />
  ),
  next: () => <img src="https://skillicons.dev/icons?i=next&theme=dark" />,
  prisma: () => <img src="https://skillicons.dev/icons?i=prisma&theme=dark" />,
  nodejs: () => <img src="https://skillicons.dev/icons?i=nodejs&theme=dark" />,
  mongodb: () => (
    <img src="https://skillicons.dev/icons?i=mongodb&theme=dark" />
  ),
  postgresql: () => (
    <img src="https://skillicons.dev/icons?i=postgres&theme=dark" />
  ),
  docker: () => <img src="https://skillicons.dev/icons?i=docker&theme=dark" />,
  react: () => <img src="https://skillicons.dev/icons?i=react&theme=dark" />,
  tailwind: () => (
    <img src="https://skillicons.dev/icons?i=tailwindcss&theme=dark" />
  ),
  git: () => <img src="https://skillicons.dev/icons?i=git&theme=dark" />,
  html: () => <img src="https://skillicons.dev/icons?i=html&theme=dark" />,
  css: () => <img src="https://skillicons.dev/icons?i=css&theme=dark" />,
  prometheus: () => (
    <img src="https://skillicons.dev/icons?i=prometheus&theme=dark" />
  ),
  grafana: () => (
    <img src="https://skillicons.dev/icons?i=grafana&theme=dark" />
  ),
  Azure: () => <img src="https://skillicons.dev/icons?i=azure&theme=dark" />,
  jest: () => <img src="https://skillicons.dev/icons?i=jest&theme=dark" />,
  linux: () => <img src="https://skillicons.dev/icons?i=linux&theme=dark" />,
  kubernetes: () => (
    <img src="https://skillicons.dev/icons?i=kubernetes&theme=dark" />
  ),
  python: () => <img src="https://skillicons.dev/icons?i=python&theme=dark" />,
  postman: () => (
    <img src="https://skillicons.dev/icons?i=postman&theme=dark" />
  ),
  fastapi: () => (
    <img src="https://skillicons.dev/icons?i=fastapi&theme=dark" />
  ),
  aws: () => <img src="https://skillicons.dev/icons?i=aws&theme=dark" />,

  credit: () => (
    <svg
      className="mx-2"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path
        fill="gray"
        d="M256 48a208 208 0 1 1 0 416a208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-56.6-199.4c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
      ></path>
    </svg>
  ),
};
