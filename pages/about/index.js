// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiExpress,
  SiDjango,
  SiFirebase,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end Development",
        icons: [
          <FaHtml5 key=""/>,
          <FaCss3 key=""/>,
          <FaJs key=""/>,
          <FaReact key=""/>,
          <SiNextdotjs key=""/>,
          
        ],
      },
      {
        title: "Back-end Development",
        icons: [
          <SiExpress key=""/>,
          <SiDjango key=""/>,
          <FaJs key=""/>,
          <SiFirebase key=""/>,
          <SiPython key=""/>,
          
        ],
      },
      {
        title: "Familiar Databases",
        icons: [<SiPostgresql  key=""/>, <SiMongodb  key=""/>, <SiMysql key="" />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title:"Placement Cell - Hornee (Certificate)",
        stage: "2023",
      },
      {
        title: "PG Tech - Honoree (Certificate)",
        stage: "2023",
      },
      {
        title: "Future First Immigrations - Intern",
        stage: "20023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer",
        stage: "From 2021",
      },
      {
        title: "Intern - Future First Immigration",
        stage: "June 2023 - Dec 2023",
      },
      {
        title: "Training - PG Tech Pvt. lmt.",
        stage: "June 2023",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "B.Tech - Punjabi University Patiala in CSE (8.98 SGPA)",
        stage: "2021 - 2025",
      },
      {
        title: "School - Meritorious School Bathinda ( +1, +2) ( >90% Marks)",
        stage: "2019 - 2021",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full mt-5 bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto  flex  flex-col h-full items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" className="h2">
            Captivating <span>stories</span> birth manificant designs.
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-12 px-2 xl:px-0">
          Embarking on a coding journey a decade ago, my web development odyssey is a tapestry of remote collaborations, startup consultations, and digital innovation, crafting a narrative defined by a decade of coding expertise, problem-solving, and client satisfaction.
          </motion.p>
          {/*counter */}
          <motion.div variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/*experiecnce */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
            
              {/*projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/*awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden" className="flex flex-col -mt-10 w-full xl:max-w-[48%] h-[480px] items-center ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex my-2 gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className=" text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
