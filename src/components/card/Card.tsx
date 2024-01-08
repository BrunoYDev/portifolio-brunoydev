import { Project } from "@/interfaces/project";
import api from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { FaGithub,FaLink } from "react-icons/fa";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {

  return (
    <div className="flex-col mt-5">
      <p className="text-2xl mb-3">{project.name}</p>
      <p>Language: {project.language}</p>
      {project.description !== null ? <p className="mb-3">Description: {project.description}</p> : <p className="mb-3">Description: No Description</p>}
      <div className="flex gap-5">
      <Link href={project.html_url} target="_blank" className="flex items-center gap-1"><FaGithub />Github Page</Link>
      {project.homepage ? <Link href={project.homepage} target="_blank" className="flex items-center gap-1"><FaLink />Project Page</Link> : null}
      </div>
    </div>
  );
};

export default Card;
