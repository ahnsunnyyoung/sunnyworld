import React, { useEffect } from "react";
import Head from 'next/head'
import MainSection from './components/MainSection';
import ContentsSection from './components/ContentsSection';
import Header from './components/Header';
import EndSection from './components/EndSection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export default function Home() {

  useEffect(() => {
    
    gsap.to(".shadowSunnyDivAni", {
      duration: 4,
      left: '50%',
      ease: "expo", 
      scrollTrigger: {
        trigger: ".shadowSunnyDivAni",
        // toggleActions: "play none restart none",
      },
    });

    gsap.to("#aboutComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#aboutComponent",
        start: 'bottom 50%',
        scrub: true
      },
    });

    gsap.to("#skillsComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#skillsComponent",
        start: 'bottom 50%',
        scrub: true
      },
    });

    gsap.to("#educationComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#educationComponent",
        start: 'bottom 50%',
        scrub: true
      },
    });

    gsap.to("#experiencesComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#experiencesComponent",
        start: 'bottom 50%',
        scrub: true
      },
    });

    gsap.to("#projectsComponent", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#projectsComponent",
        start: 'bottom 50%',
        scrub: true
      },
    });

    document.querySelectorAll(".visionIconDivAni").forEach((icon, i) => {  
      gsap.to(icon, {
        duration: 2,
        opacity: 1, 
        stagger: 0.2,
        force3D: true,
        delay: i * 0.5,
        scrollTrigger: {
          trigger: ".visionIconDivAni",
          toggleActions: "restart",
      },
      });
    });

    gsap.to(".etcSkillsIconAni", {
      duration: 2,
      opacity: 1, 
      stagger: 0.2,
      scale: 1.1,
      ease: "elastic", 
      force3D: true,
      scrollTrigger: {
        trigger: ".etcSkillsIconAni",
        toggleActions: "restart",
      },
    });

    gsap.to(".Skill-100", 
      {
        width: '100%',
        opacity: '100%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-100",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-90", 
      {
        width: '90%',
        opacity: '90%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-90",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-80", 
      {
        width: '80%',
        opacity: '80%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-80",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-70", 
      {
        width: '70%',
        opacity: '70%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-70",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-60", 
      {
        width: '60%',
        opacity: '60%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-60",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-50", 
      {
        width: '50%',
        opacity: '50%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-50",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-40", 
      {
        width: '40%',
        opacity: '40%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-40",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-30", 
      {
        width: '30%',
        opacity: '30%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-30",
          toggleActions: "restart",
        },
    });

    gsap.to(".Skill-20", 
      {
        width: '20%',
        opacity: '20%',
        duration: 4,
        ease: "expo", 
        scrollTrigger: {
          trigger: ".Skill-20",
          toggleActions: "restart",
        },
    });
    
  }, []);


  return (
    <div className="main-container">
      <Head>
        <title>Sunny World</title>
      </Head>
      <Header />
      {/* <div className="cursor"></div> */}
      <MainSection/>
      <ContentsSection/>
      <EndSection/>
    </div>
  )
}
