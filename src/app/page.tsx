import Card from "@/components/card/Card";
import HeaderBase from "@/components/headerBase";
import { Project } from "@/interfaces/project";
import api from "@/services/api";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const response = await api.get(
    "users/brunoydev/repos?per_page=4&page=1&sort=updated"
  );

  return response.data;
};

const Home = async () => {
  const projects: Project[] = await generateStaticParams();

  return (
    <>
      <main className="body h-screen justify-center overflow-x-hidden">
        <section
          id="about"
          className="flex-col p-0 h-screen pt-28 lg:pt-0 border-b-4 border-grey-100 md:flex md:flex-wrap md:justify-between md:gap-10"
        >
          <div className="flex-col w-[90%] mx-auto justify-center md:flex md:pt-20 md:w-[50%] md:self-start md:mx-0 md:h-[100%] md:ml-28">
            <div className="flex gap-5 justify-center items-center md:justify-start ">
              <figure className="flex rounded-full overflow-hidden w-16 h-16 ">
                <Image
                  src="/profile.jpg"
                  width={500}
                  height={100}
                  style={{
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                  priority
                  alt="profile photo"
                />
              </figure>
              <h2 className="text-grey-100 md:text-2xl">Hello, My name is Bruno</h2>
            </div>
            <div className="flex-col justify-center w-full">
              <h2 className="text-grey-100 text-5xl text-left mt-6 text-bold">
                I <span className="text-primary-900">love</span> creating and{" "}
                <span className="text-primary-900">developing</span> projects{" "}
              </h2>
              <p className="text-grey-300 text-left mt-10 md:text-lg">
                Exploring the intersection of creativity and technology drives
                me. My journey is shaped by the relentless pursuit of unique
                solutions and impactful experiences. Lets create something
                extraordinary together.
              </p>
            </div>
            <div className="w-full mt-6 flex gap-5">
              <Link
                href="#projects"
                className="px-10 py-3 bg-primary-900 text-grey-100 rounded-md"
              >
                See Projects
              </Link>
              <Link href="https://github.com/BrunoYDev" target="_blank">
                <Image
                  src="/git-icon.svg"
                  width={50}
                  height={50}
                  priority
                  alt="git icon"
                />
              </Link>
            </div>
            <div className="flex mt-20 gap-5 md:w-96">
              <Image
                src="/htmlicon.svg"
                width={50}
                height={50}
                priority
                alt="html icon"
              />
              <Image
                src="/cssicon.svg"
                width={46}
                height={46}
                priority
                alt="html icon"
              />
              <Image
                src="/jsicon.svg"
                width={53}
                height={53}
                priority
                alt="html icon"
              />
              <Image
                src="/nodeicon.svg"
                width={91}
                height={26}
                priority
                alt="html icon"
              />
              <Image
                src="/reacticon.svg"
                width={68}
                height={68}
                priority
                alt="html icon"
              />
            </div>
          </div>
          <div className="hidden md:flex md:max-w-[50%] md:max-h-[100%] overflow-hidden">
            <figure className="relative w-full h-full flex">
              <Image
                src="/bgheader.svg"
                width={900}
                height={900}
                style={{
                  objectFit: "cover",
                }}
                priority
                alt="background image"
              />
            </figure>
          </div>
        </section>
        <section
          id="projects"
          className="flex justify-center min-h-fit w-screen pt-24 bg-grey-500 md:min-h-screen"
        >
          <div className="flex-col w-[90%] justify-left md:flex md:justify-center">
            <h2 className="text-grey-100 text-xl text-bold md:text-3xl md:self-center md:mb-10">
              My Latest Projects
            </h2>
            <ul className="text-grey-100 min-h-fit pb-20 md:grid md:grid-cols-2 md:max-w-fit md:gap-32 md:self-center">
              {projects.map((project: Project) => (
                <li
                  key={project.id}
                  className="md:flex md:justify-center mb-6 md:mb-0"
                >
                  <Card key={project.id} project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id="contacts"
          className="flex-col p-0 h-fit pt-20 md:min-h-screen"
        >
          <div className="flex-col w-[90%] mx-auto justify-center">
            <div className="flex-col justify-center w-full">
              <h2 className="text-grey-100 text-5xl text-left mt-6 text-bold">
                Lets set up a conversation and{" "}
                <span className="text-primary-900">develop our creativity</span>{" "}
                together?
              </h2>
              <p className="text-grey-300 text-left mt-10">
                Promote your brand organically by building a website with me!
              </p>
            </div>
            <div className="flex-col text-grey-100 mt-12">
              <div className="flex gap-10 mb-10 items-start">
                <Image
                  src="/telephone.svg"
                  width={70}
                  height={70}
                  priority
                  alt="telephone image"
                />
                <div className="flex-col gap-3">
                  <h3 className="text-xl mb-5">My Phone</h3>
                  <p className="text-grey-200 mb-5">
                    Im available for a voice chat, lets about creativity
                    together?
                  </p>
                  <Link
                    href="tel:+5513996428264"
                    className="text-grey-100"
                    target="_blank"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
              <div className="flex gap-10 mb-10 items-start">
                <Image
                  src="/email.svg"
                  width={70}
                  height={70}
                  priority
                  alt="email image"
                />
                <div>
                  <h3 className="text-xl mb-5">My Email</h3>
                  <p className="text-grey-200 mb-5">
                    Send me an email reporting feedbacks, suggestions and ideas
                  </p>
                  <Link
                    href="mailto:bruno.rogues.garcia@gmail.com"
                    className="text-grey-100"
                    target="_blank"
                  >
                    Send Email Now
                  </Link>
                </div>
              </div>
              <div className="flex gap-10 mb-10 items-start">
                <Image
                  src="/linkedin.svg"
                  width={70}
                  height={70}
                  priority
                  alt="tlinkedin image"
                />
                <div>
                  <h3 className="text-xl mb-5">My Linkedin</h3>
                  <p className="text-grey-200 mb-5">
                    We can create more constant interactions as well as a
                    sharing network
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/brunogarciaydev"
                    className="text-grey-100"
                    target="_blank"
                  >
                    Go to linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="socialMedia"
          className="bg-grey-500 w-screen justify-center flex"
        >
          <div className="flex-col w-[90%] p-11">
            <figure className=" flex mx-auto rounded-full overflow-hidden w-16 h-16 mb-1">
              <Image
                src="/profile.jpg"
                width={500}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
                priority
                alt="profile photo"
              />
            </figure>
            <h2 className="text-grey-100 text-2xl mb-6 text-center">
              Thank you!
            </h2>
            <p className="text-grey-200 mb-6 text-center">
              Follow me on my social networks and lets talk
            </p>
            <div className="flex w-[100%] items-center justify-center gap-6">
              <Link href="https://www.instagram.com/ykkos2/" target="_blank">
                <Image
                  src="/CircleInstagram.svg"
                  width={50}
                  height={50}
                  priority
                  alt="instagram image"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/brunogarciaydev"
                target="_blank"
              >
                <Image
                  src="/CircleLinkedin.svg"
                  width={50}
                  height={50}
                  priority
                  alt="linkedin image"
                />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5513996428264&text=Hello"
                target="_blank"
              >
                <Image
                  src="/CircleWhatsapp.png"
                  width={50}
                  height={50}
                  priority
                  alt="whatsapp image"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
