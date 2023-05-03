import React, { useEffect } from "react";
import { Inter } from 'next/font/google'
import Header from './components/Header';
import MainSection from './components/MainSection';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';


export default function Home() {
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  }, []);

  
  

  return (
    <div className="main-container">
      <Header/>
      <MainSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  )
}
