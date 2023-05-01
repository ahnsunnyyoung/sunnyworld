import React, { useEffect } from "react";
import { Inter } from 'next/font/google'
import MainSection from './MainSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';


export default function Home() {

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
  }
  
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
  

  return (
    <div className="main-container">
      <MainSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  )
}
