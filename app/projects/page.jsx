"use client";
import { motion } from "framer-motion";
import React,{useState} from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import { Tooltip,TooltipContent,TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [

  {
    num:'01',
    category:'MLOps',
    title:'project 1',
    description:"Fake News Detection: A cutting-edge AI solution for identifying and combating misinformation",
    stack:[
      {
        name:'AWS'
      },
      {
        name:'Docker'
      },
      {
        name:'Github Actions'
      },
      {
        name:'Python'
      },
      {
        name:'Prometheus'
      },
      {
        name:'Grafana'
      },
    ],
    image:'/assets/work/fake-news.png',
    live:'',
    github:"https://github.com/udaygupta8899/Vehicle-Insurance-Prediction",
  },
  
  {
    num:'02',
    category:'MLOps',
    title:'project 2',
    description:"Vehicle Insurance Prediction : An AI-powered vehicle insurance prediction system",
    stack:[
      {
        name:'AWS'
      },
      {
        name:'Docker'
      },
      {
        name:'MongoDB'
      },
      {
        name:'Github Actions'
      },
      {
        name:'FastAPI'
      },
      {
        name:'Python'
      },
    ],
    image:'/assets/work/insurance-prediction-visual.png',
    live:'',
    github:"https://github.com/udaygupta8899/Vehicle-Insurance-Prediction",
  },

  {
    num:'03',
    category:'generative AI',
    title:'project 3',
    description:"Web-Integrated Chatbot: Generative AI for Seamless Q&A and Information Retrieval",
    stack:[
      {
        name:'Python'
      },
      {
        name:'Langchain'
      },
      {
        name:'Groq API'
      },
      {
        name:'Streamlit'
      }
    ],
    image:'/assets/work/thumb1.png',
    live:'https://chat-with-search-langchain.streamlit.app/',
    github:"https://github.com/udaygupta8899/Chat-With-Search-Langchain/tree/main",
  },
];

const Work = () => {
  const [project,setProject] =useState(projects[0]);
  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.realIndex;
    //Update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  
  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{
        opacity:1,
        transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* Outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            </div>
            {/* Project Category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            {/* Project Description */}
            <p className="text-white/60">{project.description}</p>
            {/* Stack */}
            <ul className="flex gap-4">
              {project.stack.map((item,index)=>{
                return <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index!== project.stack.length-1 && ","}
                </li>
              })}
            </ul>
            {/* Border */}
            <div className="border border-white/20"></div>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Live Project Button */}
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* GitHub project button */}
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill
                        className="object-cover" 
                        alt="" 
                      />
                    </div>
                  </div>
                </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                                        w-[44px] h-[44px] flex justify-center items-center transition-all"
                              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;