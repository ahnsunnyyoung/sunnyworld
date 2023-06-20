import { BsLinkedin, BsGithub, BsTelegram, BsInstagram, BsYoutube, BsFillEnvelopeAtFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function EndSection() {
  const data = [
    {
      "icon": <BsGithub size={25}/>,
      "url": "https://github.com/ahnsunnyyoung",
      "title": "Githb"
    },
    {
      "icon": <BsLinkedin size={18}/>,
      "url": "https://www.linkedin.com/in/ahnsunnyyoung/",
      "title": "LinkedIn"
    },
    {
      "icon": <BsTelegram size={18}/>,
      "url": "https://t.me/ahntjs0",
      "title": "Telegram"
    },
    {
      "icon": <BsFillEnvelopeAtFill size={18}/>,
      "url": "mailto:ahnsunnyyoung@gmail.com",
      "title": "Email"
    },
    {
      "icon": <BsInstagram size={18}/>,
      "url": "https://www.instagram.com/ahn_sunny_young/",
      "title": "Instagram"
    },
    {
      "icon": <BsYoutube size={18}/>,
      "url": "https://www.youtube.com/@sunnyworld3118",
      "title": "Youtube"
    },
  ]

  function scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <section id='endSection'>

      {/* absolute background */}
      <div id='shadowSunnyDiv'>
        <span id='shadowSunny'>Sunny</span>
      </div>

      <div id='scrollUpDiv'>
        <span id='scrollUp' onClick={scrollTop}><BsFillArrowUpCircleFill size={60}/></span>
      </div>

      <span id='mainPosition'>Frontend Developer</span>
      <span id='mainTitle'>Do you want some Sunshine?</span>
      <div id='contacts'>
        {data.map((item) =>
          <a className="contactDiv" href={item.url}>
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
          </a>
        )}
      </div>

    </section>
  )
}
