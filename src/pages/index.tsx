import React, { useEffect, } from "react";
import Head from 'next/head'
import Header from './components/Header';
import MainSection from './components/MainSection';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import { IoMdFlower } from 'react-icons/io';

const scrollTo = (id: string, e: { preventDefault: () => void; }) => {
  const section = document.querySelector( id );
  if (section){
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
}

export default function Home() {
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.4,  // 50%가 viewport에 들어와 있어야 callback 실행
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
      <Head>
        <title>Sunny World</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Header/>
      <MainSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <div className="navigator-dots">
        <div className="dots" onClick={(e)=>{scrollTo('#home', e)}}>
          <IoMdFlower/>
        </div>
        <div className="dots" onClick={(e)=>{scrollTo('#belief', e)}}>
          <IoMdFlower/>
        </div>
        <div className="dots" onClick={(e)=>{scrollTo('#projects', e)}}>
          <IoMdFlower/>
        </div>
        <div className="dots" onClick={(e)=>{scrollTo('#contact', e)}}>
          <IoMdFlower/>
        </div>

      </div>
    </div>
  )
}
