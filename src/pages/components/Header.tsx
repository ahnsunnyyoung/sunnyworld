import { useState, useEffect } from 'react';
import { MdSunny } from 'react-icons/md';
import { theme } from '../../styles';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    gsap.to("#navbar #logo-icon-svg", {
      rotate:'360',
      duration:3,
    });

    gsap.to("#contact-logo-icon-svg", {
      rotate:'360',
      duration:3,
      scrollTrigger: {
        trigger: "#contact",
        start: "0px 50%",
        toggleActions: 'restart'
      },
    });

    gsap.to("#navbar #logo", {
      x:'38%',
      y:'-90px',
      scrollTrigger: {
        trigger: "#belief",
        start: "0px 100%",
        end: "0px 0%",
        scrub: true,
        toggleActions: 'play pause reverse pause'
      },
    });

    gsap.to("#navbar #logo", {
      x:'80%',
      y:'0px',
      immediateRender: false,
      scrollTrigger: {
        trigger: "#projects",
        start: "0px 100%",
        end: "0px 0%",
        scrub: true,
        toggleActions: 'play pause reverse pause'
      }
    });

    gsap.to("#navbar #logo-icon-svg", {
      rotate:'360',
      scrollTrigger: {
        trigger: "#belief",
        start: "0px 100%",
        end: "0px 0%",
        scrub: true,
        toggleActions: 'play pause reverse pause'
      },
    });

    gsap.to("#navbar #logo-icon-svg", {
      rotate:'360',
      scrollTrigger: {
        trigger: "#projects",
        start: "0px 100%",
        end: "0px 0%",
        scrub: true,
        toggleActions: 'play pause reverse pause'
      }
    });

    gsap.to("#navbar #logo", {
      opacity: 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#contact",
        start: "0px 100%",
        end: "0px 0%",
        scrub: true,
        toggleActions: 'play pause reverse pause'
      }
    });

    gsap.to("#main-container", {
      opacity:'100%',
      duration:3,
    });
    gsap.to("#main-container", {
      opacity:0,
      duration:1,
      scrollTrigger: {
        trigger: "#belief",
        start: "0px 50%",
        end: "0px 0%",
        toggleActions: 'play none reverse reverse'
      },
    });


  }, []);

  const scrollTo = (id: string, e: { preventDefault: () => void; }) => {
    const section = document.querySelector( id );
    if (section){
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
  }
  return (
    <nav className="w-full bg-transparent" id='navbar'>
      <div style={{width:'100%'}} className="flex items-center justify-between p-3 md:py-5">
          <div  id="logo-container">
            <div id="logo" className='flex align-content-center' onClick={(e)=>{scrollTo('#home', e)}}>
              <div id="logo-icon">
                <MdSunny id="logo-icon-svg" color={theme.palette.darkpink} size='100%'/>
              </div>
              <div id="logo-text">
                <p id="txt-sunny">SUNNY</p>
                <p id="txt-world">world</p>
              </div>
            </div>
          </div>
          {/* <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div> */}
        </div>
        {/* <div style={{float:'right'}}>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <div className="nav-btn" onClick={(e)=>{scrollTo('#home', e)}}>
                  Sunny
                </div>
              </li>
              <li>
                <div className="nav-btn" onClick={(e)=>{scrollTo('#belief', e)}}>
                  Belief
                </div>
              </li>
              <li>
                <div className="nav-btn" onClick={(e)=>{scrollTo('#projects', e)}}>
                  Projects
                </div>
              </li>
              <li>
                <div className="nav-btn" onClick={(e)=>{scrollTo('#contact', e)}}>
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </div> */}
    </nav>
  )
}
