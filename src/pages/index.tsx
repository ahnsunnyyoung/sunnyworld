import React, { useEffect, } from "react";
import Head from 'next/head'
import MainSection from './MainSection';
import ContentsSection from './ContentsSection';
import EndSection from './EndSection';

export default function Home() {

  useEffect(() => {
    
    const cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', e => {
      if(cursor)
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })
  
    document.addEventListener('click', () => {
      if(cursor)
        cursor.classList.add("expand");
  
        setTimeout(() => {
          if(cursor)
            cursor.classList.remove("expand");
        }, 500)
    })
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
