"use client";
import { FaJava, FaPython, FaCuttlefish, FaLaptopCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn,SiKeras } from 'react-icons/si';  // Import from 'react-icons/si'
import { SiDvc, SiMlflow, SiDocker, SiAmazonaws } from "react-icons/si";
import { SiGithub, SiFastapi, SiMongodb } from "react-icons/si";
import { SiLangchain, SiStreamlit, SiGroq } from "react-icons/si";
import {SiTailwindcss,SiNextdotjs} from "react-icons/si";
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//About data
const about = {
  title:'About me',
  description: "Personal Details",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Uday Kumar Gupta",
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 9051 683 219",
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian",
    },
    {
      fieldName:"Email",
      fieldValue:"udaygupta8899@gmail.com",
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi, Bengali",
    },
  ]
}

//Experience data
const experience = {
  icon:'/assets/resume/badge.svg',
  title: 'My Experience',
  description: "",
  items: [
    {
      company:"Computer Science Club MNIT",
      position:"Technical Executive",
      duration:"Sep 2024 - Present"
    },
  ]
}

//Education data
const education = {
  icon:'/assets/resume/cap.svg',
  title: 'My Education',
  description: "",
  items: [
    {
      institution:"Malaviya National Institute of Technology(MNIT) Jaipur",
      degree:"Bachelor of Technology",
      duration:"2023-2027"
    },
  ]
}

//Skills data
const skills = {
  title:"My Skills",
  skillList:[
    {
      icon:<FaJava />,
      name:"Java",
    },
    {
      icon:<FaPython/>,
      name:"Python",
    },
    {
      icon:<SiPytorch />,
      name:"PyTorch",
    },
    {
      icon:<SiScikitlearn />,
      name:"Scikit-Learn"
    },
    {
      icon:<SiKeras />,
      name:"Keras"
    },
    {
      icon:<SiTensorflow />,
      name:"Tensorflow",
    },
    {
      icon:<SiDvc />,
      name:"DVC",
    },
    {
      icon:<SiMlflow />,
      name:"MLflow",
    },
    {
      icon:<SiDocker />,
      name:"Docker",
    },
    {
      icon:<SiGithub />,
      name:"GitHub",
    },
    {
      icon:<SiFastapi />,
      name:"FastAPI",
    },
    {
      icon:<SiMongodb />,
      name:"MongoDB",
    },
    {
      icon:<SiLangchain />,
      name:"Langchain",
    },
    {
      icon:<SiStreamlit />,
      name:"Streamlit",
    },
    {
      icon: <img src="assets/c++.svg" alt="C++" style={{ width: "70px", height: "70px" }} />,  // Custom C++ logo
      name: "C++",
    },
    {
      icon:<FaCuttlefish />,
      name:"C",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:
      2.4,duration:0.4,ease:'easeIn'},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return (
                      <li key={index} className="bg-[#232329] h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            {/* Skills */}
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=> {
                    return (<li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-#232329 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>);
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item,index)=>{
                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      })}
                    </ul>
                  </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
