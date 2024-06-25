"use client";
import MeetTheTeam from "@/components/MeetTheTeam";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Robotics Club
            </h1>
            <p className="text-xl m-2 font-extrabold">IIT Indore</p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Explore the world of robotics with us!
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
              onClick={scrollToAboutSection}
            >
              View More
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto" ref={aboutSectionRef}>
        <div className="mx-auto bg-gray-800 shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Image section */}
          <div className="md:w-1/2 relative">
            <img
              src="/robot.jpeg"
              alt="Robot Image"
              className="h-full w-full object-cover opacity-70 md:rounded-l-lg"
            />
          </div>
          {/* Text section */}
          <div className="md:w-1/2 bg-gray-900 bg-opacity-90 p-8 md:p-12 md:rounded-r-lg flex items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About Us
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                We are a diverse group of students passionate about robotics and
                innovation. Our club operates under the Science and Tech Council
                at IIT Indore, fostering creativity and practical application of
                theoretical knowledge. Whether you&apos;re into remote-controlled
                cars or advanced robotics, our community welcomes you. We thrive
                on the diversity of our members, leveraging various technical
                backgrounds to craft innovative solutions for automation
                challenges. We are constantly pushing the boundaries of what is
                possible in robotics. From developing autonomous drones to
                creating humanoid robots capable of complex tasks, our projects
                are at the forefront of technological innovation.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      <MeetTheTeam />
    </>
  );
}
