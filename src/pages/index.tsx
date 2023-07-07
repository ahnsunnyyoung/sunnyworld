import React, { useEffect } from "react";
import Head from 'next/head'
import MainSection from './MainSection';
import ContentsSection from './ContentsSection';
import EndSection from './EndSection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export default function Home() {

  useEffect(() => {
    
    gsap.to("#mainSection #shadowSunnyDiv", {
      duration: 4,
      left: '50%',
      ease: "expo", 
      scrollTrigger: {
        trigger: "#mainSection #shadowSunnyDiv",
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

    document.querySelectorAll(".visionIconDiv").forEach((icon, i) => {  
      gsap.to(icon, {
        duration: 2,
        opacity: 1, 
        stagger: 0.2,
        force3D: true,
        delay: i * 0.5,
        scrollTrigger: {
          trigger: ".visionIconDiv",
          toggleActions: "restart",
      },
      });
    });

    gsap.to(".etcSkillsIcon", {
      duration: 2,
      opacity: 1, 
      stagger: 0.2,
      scale: 1.1,
      ease: "elastic", 
      force3D: true,
      scrollTrigger: {
        trigger: ".etcSkillsIcon",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Open Sans Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      </Head>
      {/* <div className="cursor"></div> */}
      <MainSection/>
      <ContentsSection/>
      <EndSection/>
    </div>
  )
}
