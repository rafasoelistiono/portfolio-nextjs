"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SEO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Indonesia, Jakarta</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Hackerrank Basic Python</li>
        <li>SoloLearn JavaScript</li>
        <li>SoloLearn C++</li>
        <li>Google Marketing Fundamentals</li>
        <li>Google Analytics for Beginner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16 px-4 md:px-8 xl:px-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
        <div className="rounded-lg overflow-hidden">
          <Image src="/images/about-image.jpeg" width={500} height={500} />
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300">
            I'm a web developer who loves startups and making new connections.
            I also like to help others learn about new technologies, so if you'd
            like me to teach you something or send you resources, hit me up!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
