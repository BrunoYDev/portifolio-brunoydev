import HeaderBase from "@/components/headerBase";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="body min-h-screen justify-center overflow-hidden">
        <section id="about" className="flex-col p-0 h-screen pt-28 border-b-4 border-grey-100">
          <div className="flex-col w-[90%] mx-auto justify-center">
          <div className="flex gap-5 justify-center items-center">
            <figure className="border flex rounded-full overflow-hidden w-16 h-16">
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
            <h2 className="text-grey-100">Hello, My name is Bruno</h2>
          </div>
          <div className="flex-col justify-center w-full">
            <h2 className="text-grey-100 text-5xl text-left mt-6 text-bold">
              I <span className="text-primary-900">love</span> creating and{" "}
              <span className="text-primary-900">developing</span> projects{" "}
            </h2>
            <p className="text-grey-300 text-left mt-10">Discover here in this environment, created especially for you, all my projects and technologies</p>
          </div>
          <div className="w-full mt-6 flex gap-5">
            <Link href="#projects" className="px-10 py-3 bg-primary-900 text-grey-100 rounded-md">See Projects</Link>
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
          <div className="flex mt-20 gap-5">
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
        </section>
        <section id="projects">
        <div className="flex-col w-[90%] mx-auto mt-5 justify-center">
          <div className="flex gap-5 justify-center items-center">
            <figure className="border flex rounded-full overflow-hidden w-16 h-16">
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
            <h2 className="text-grey-100">Hello, My name is Bruno</h2>
          </div>
          <div className="flex-col justify-center w-full">
            <h2 className="text-grey-100 text-5xl text-left mt-6 text-bold">
              I <span className="text-primary-900">love</span> creating and{" "}
              <span className="text-primary-900">developing</span> projects{" "}
            </h2>
            <p className="text-grey-300 text-left mt-10">Discover here in this environment, created especially for you, all my projects and technologies</p>
          </div>
          <div className="w-full mt-6 flex gap-5">
            <Link href="#projects" className="px-10 py-3 bg-primary-900 text-grey-100 rounded-md">See Projects</Link>
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
          <div className="flex mt-10 gap-5">
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
        </section>
        <section id="contacts"></section>
        <section id="socialMedia"></section>
      </main>
    </>
  );
};

export default Home;
